import React, { Component } from 'react';
import api from './services/api';
import { createBrowserHistory }  from 'history';
import $ from 'jquery';
import Loading from './components/load/Load';
import InputCustomizado from './components/input/InputCustomizado';
import TratadorErros from  './TratadorErros';
import PubSub from 'pubsub-js';
class FormLogin extends Component
{
    constructor(){
        super();
        this.state = {email:'',password:'', msg:''};
    }

    Login(event){
        event.preventDefault();
        const history = createBrowserHistory();

        var body = {
            email   : this.state.email,
            password: this.state.password
        }
        PubSub.publish("limpa-erros",{});
        $('#loading-full').toggle();
        api.post('/auth/login', body,  { responseType: 'json' })
            .then(response => {
                $('#loading-full').hide();
                if(response.statusText == 'OK')
                {
                    const token = response.data.access_token;
                    localStorage.setItem('auth-token', token);
                    this.props.history.push('/app');
                }else
                {
                    new TratadorErros().publicaErros(response.request.responseText);
                    throw new Error("login incorreto");
                }
            })
            .catch(error => {
                $('#loading-full').toggle();
                if(error.response.status != 200)
                {
                    new TratadorErros().publicaErros(error.response.data);
                    this.setState({msg:'Login incorreto'});
                }
                return;
            });
    }

    setEmail(event){
        this.setState({email:event.target.value});
    }

    setSenha(event){
        this.setState({password:event.target.value});
    }

    render(){
        return(
            <div>
                <style>{'body { background: linear-gradient(to bottom right, #75618b, #383939); }'}</style>
                <div className="login-box center" style={{'textAlign':'center'}}>
                    <img src={require("./img/logo.png")} width="200px"/>
                    <span>{this.state.msg}</span>
                    <form onSubmit={this.Login.bind(this)} method="post"> 
                        <InputCustomizado id="email" type="email" name="email" value={this.state.email} placeholder="digite seu email" onChange={this.setEmail.bind(this)} label="Email: "/>     
                        <input type="password" className="form-control " value={this.state.password} placeholder="digite sua senha" onChange={this.setSenha.bind(this)}/>
                        <button className="button type1">
                            Logar
                        </button>
                        <a href='#'>cadastre-se</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default class Login extends Component {  
    render(){ 
        return (
            <div>
                <Loading/>,
                <FormLogin/>
            </div>
    );
  }   
}
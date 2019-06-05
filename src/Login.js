import React, { Component } from 'react';
import api from './services/api';
import { createBrowserHistory }  from 'history';

export default class Login extends Component 
{
    constructor(){
        super();
        this.state = {email:'',password:'', msg:''};
    }

    enviaForm(event){
        const history = createBrowserHistory();
        event.preventDefault();
        var body = {
            email: this.state.email,
            password: this.state.password
        }

        api.post('/auth/login', body)
            .then(response => {
                if(response.statusText == 'OK'){
                    const token = response.data.access_token;
                    localStorage.setItem('auth-token', token);
                    this.props.history.push('/app');
                }else{
                    throw new Error("login incorreto");
                }
            })
            .catch(error => {
                if(error.response.status != 200){
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
        return (
            <div>
                <style>{'body { background: linear-gradient(to bottom right, #75618b, #383939); }'}</style>
                <div className="login-box center" style={{'textAlign':'center'}}>
                    <img src={require("./img/logo.png")} width="200px"/>
                    <span>{this.state.msg}</span>
                    <form onSubmit={this.enviaForm.bind(this)} method="post"> 
                        <input type="text" className="form-control" value={this.state.email} placeholder="digite seu email" onChange={this.setEmail.bind(this)}/>
                        <input type="password" className="form-control " value={this.state.password} placeholder="digite sua senha" onChange={this.setSenha.bind(this)}/>
                        <button className="button type1">
                            Logar
                        </button>
                        <a href='#'>cadastre-se</a>
                    </form>
                </div>
            </div>
    );
  }   
}
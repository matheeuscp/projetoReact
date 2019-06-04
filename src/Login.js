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
                    throw new Error('login incorreto');
                }
            })
            .catch(error => {
                this.setState({msg:error.message})
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
                <div className="login-box center" style={{'textAlign':'center'}}>
                    <h1 className="header-logo center">Login</h1>
                    <span>{this.state.msg}</span>
                    <form onSubmit={this.enviaForm.bind(this)} method="post"> 
                        <input type="text" className="form-control" value={this.state.email} onChange={this.setEmail.bind(this)}/>
                        <input type="password" className="form-control " value={this.state.password} onChange={this.setSenha.bind(this)}/>
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
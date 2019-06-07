
import React, {Component} from 'react';
import './css/login.css';
import * as b from 'react-bootstrap';
import $ from 'jquery';
import InputCustomizado from './components/input/InputCustomizado';
import api from './services/api';
import TratadorErros from  './TratadorErros';
import PubSub from 'pubsub-js';
import { createBrowserHistory }  from 'history';
import Complete from './components/complete/Complete';
import Loading from './components/load/Load';


export default class Cadastro extends Component 
{
    constructor(){
        super();
        this.state = {emailCad:'',passwordCad:'', nome:'',nickname:'', cpf:''};
    }
    
    Cadastrar(event){
        event.preventDefault();
        
        const history = createBrowserHistory();

        $('#loading-full').toggle();

        var body = {
            email   : this.state.emailCad,
            password: this.state.passwordCad,
            name    : this.state.nome,
            nickname: this.state.nickname,
            cpf     : this.state.cpf
        }

        PubSub.publish("limpa-erros",{});    
        api.post('/cadastrar', body,  { responseType: 'json' })
            .then(response => {
                $('#loading-full').hide();
                
                if(response.statusText == 'OK')
                {
                    this.setState({nome:'',emailCad:'',passwordCad:'',nickname:'', cpf:''});
                    $('.complete').show();
                    setTimeout(function(){  $('.complete').hide(); }, 1700);
                }else
                {
                    new TratadorErros().publicaErros(response.responseJSON);
                    throw new Error("login incorreto");
                }
            })
            .catch(error => {
                $('#loading-full').toggle();
                console.log(error);return;
            });
    }

    setNome  = (event) =>  this.setState({nome:event.target.value});
    setEmail = (event) =>  this.setState({emailCad:event.target.value});
    setSenha = (event) =>  this.setState({passwordCad:event.target.value});
    setNick  = (event) =>  this.setState({nickname:event.target.value});
    setCpf   = (event) =>  this.setState({cpf:event.target.value});

    esconder(event){
        event.preventDefault();
        $("#formCad").hide();
        $("#formLogin").show();
    }

    render(){ 
            return (
                <div id="formCad" style={{display:`${this.props.display}`}}>
                    <Loading/>
                    <Complete/>
                    <div className="login-box center" style={{'textAlign':'left'}}>
                        <b.Form onSubmit={this.Cadastrar.bind(this)} method="post">
                            <InputCustomizado labels="Nome Completo" id="nome" type="text" name="nome" value={this.state.nome} placeholder="digite seu nome" onChange={this.setNome.bind(this)}/>     
                            <InputCustomizado labels="Cpf" id="cpf" type="text" name="cpf" value={this.state.cpf} placeholder="digite seu cpf" onChange={this.setCpf.bind(this)}/>     
                            <InputCustomizado labels="Email" id="emailCad" type="email" name="emailCad" value={this.state.emailCad} placeholder="digite seu email" onChange={this.setEmail.bind(this)}/>     
                            <InputCustomizado labels="Senha" id="passwordCad" type="password" name="passwordCad" value={this.state.passwordCad} placeholder="digite sua senha" onChange={this.setSenha.bind(this)}/>     
                            <InputCustomizado labels="Como quer ser chamado?" id="nickname" type="text" name="nickname" value={this.state.nickname} placeholder="digite seu apelido" onChange={this.setNick.bind(this)}/>     

                            <b.Button variant="primary" type="submit">
                                cadastrar
                            </b.Button>
                            <a href="#" id="voltar" onClick={this.esconder} style={{float:"right"}}>voltar</a>
                        </b.Form>
                    </div>
                </div>
        );
    }   
}
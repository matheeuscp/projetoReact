
import React, {Component} from 'react';
import './css/login.css';
import * as b from 'react-bootstrap';

export default class Menu extends Component 
{
    render(){ 
            return (
                <div>
                    <div className="login-box center" style={{'textAlign':'left'}}>
                        <b.Form>
                            <b.Form.Group controlId="formBasicEmail">
                                <b.Form.Label>Nome Completo</b.Form.Label>
                                <b.Form.Control type="text" placeholder="digite seu nome" />
                            </b.Form.Group>
                            <b.Form.Group controlId="formBasicEmail">
                                <b.Form.Label>Email</b.Form.Label>
                                <b.Form.Control type="email" placeholder="digite seu email" />
                            </b.Form.Group>
                            <b.Form.Group controlId="formBasicPassword">
                                <b.Form.Label>Senha</b.Form.Label>
                                <b.Form.Control type="password" placeholder="Password" />
                            </b.Form.Group>
                            <b.Form.Group controlId="formBasicPassword">
                                <b.Form.Label>Como quer ser chamado?</b.Form.Label>
                                <b.Form.Control type="text" placeholder="Password" />
                            </b.Form.Group>
                            <b.Button variant="primary" type="submit">
                                Submit
                            </b.Button>
                            <a href="#" style={{float:"right"}}>voltar</a>
                        </b.Form>
                    </div>
                </div>
        );
    }   
}
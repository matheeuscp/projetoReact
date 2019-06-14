import React, {Component} from 'react';
import Menu from '../menu/Menu';
import "react-bootstrap/dist/react-bootstrap.min.js";
import * as b from 'react-bootstrap';
import MenuFooter from '../menuFooter/MenuFooter';

export default class Detalhe extends Component {
    render(){
        return(
            <div >
              <Menu/>
              <b.Container style={{width:'100%'}}>
                <b.Row className='conteudo'>
                    <b.Col xs={6} md={4}  style={{margin: '0 auto',textAlign: 'center'}}>
                        <b.Image src={require("../../img/perfil.jpg")} style={{padding:'20px'}} width="200px" height="200px" roundedCircle />
                    </b.Col>
                </b.Row>
                </b.Container>
              <MenuFooter/>
            </div>
        );
    }
}
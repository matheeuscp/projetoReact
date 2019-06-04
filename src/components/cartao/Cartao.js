import React, {Component, PureComponent } from 'react';
import * as b from 'react-bootstrap';
import '../../moip';


const divStyle = {
    color: '#140083',
    height: '200px',
    'margin': '20px auto',
    background: 'linear-gradient(to bottom, rgb(255, 114, 0), #e99518)',
    'borderRadius': '10px',
    width:'400px'
}

const divStyle2 = {
    color: 'black',
    height: '200px',
    'margin': '20px auto',
    background: '#993399',
    'borderRadius': '10px',
    width:'400px',
}

const teste = {
    'textAling' : 'center'
}

const link = {
    color:'white',
    fontWeight:'bold'
}

export default class Cartao extends Component  {
    render(){
        return (
                <div  style={divStyle} >
                    <b.Image src={require("../../img/logo-itau.png")} width="100px"/>
                    <p style={{margin:'20px', color:'white', float: 'right',fontWeight:'bold'}}>1234 .... .... 1121</p>
                    <div style={{textAlign: 'center', position: 'absolute', bottom: '40px', height: '2.5rem', width:'400px' }}>
                        <a href='#' style={link}>ver extrato</a>
                    </div>
                </div>         
        );
    }
}
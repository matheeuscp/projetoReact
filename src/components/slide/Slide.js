import React, {Component, PureComponent } from 'react';
import * as b from 'react-bootstrap';
import SimpleLineChart from '../../Grafico';
import '../../moip';
import {Link} from 'react-router-dom';
import '../../css/login.css';
const divStyle = {
    'color': '#140083',
    'height': '200px',
    'margin': '20px auto',
    'background': 'linear-gradient(to bottom, rgb(255, 114, 0), #e99518)',
    'borderRadius': '10px',
    'width':'400px'
}

const divStyle2 = {
    'color': 'white',
    'height': '200px',
    'margin': '20px auto',
    'background': '#993399',
    'borderRadius': '10px',
    'width':'400px',
}

const teste = {
    'textAling' : 'center'
}

const link = {
    'color':'white',
    'fontWeight':'bold'
}

export default class Slide extends Component  {
    render(){
        
        return (
            <b.Container>
                <b.Row style={{background:'white', paddingBottom:'40px'}}>
                    <b.Col md={{ span: 6, offset: 3 }}>
                        <h3 style={{textAlign:"center", marginTop:'40px'}}>Meus Cartões</h3>
                            <b.Carousel style={teste}>
                                    <b.Carousel.Item>
                                    <div  style={divStyle} >
                                        <b.Image src={require("../../img/logo-itau.png")} width="100px"/>
                                        <p style={{margin:'20px', color:'white', float: 'right',fontWeight:'bold'}}>1234 .... .... 1121</p>
                                        <div style={{textAlign: 'center', position: 'absolute', bottom: '40px', height: '2.5rem', width:'400px' }}>
                                        <a href='#' style={link}>ver extrato</a>
                                    </div>
                                    </div>
                                    
                            </b.Carousel.Item>
                            <b.Carousel.Item>
                                <div  style={divStyle2}>
                                    <div>
                                        <b.Image src={require("../../img/logo-nubank.png")} width="100px"/>
                                        <p style={{margin:'20px', color:'white', float: 'right',fontWeight:'bold'}}>1234 .... .... 1121</p>
                                    </div>
                                    <div style={{textAlign: 'center', position: 'absolute', bottom: '40px', height: '2.5rem', width:'400px' }}>
                                        <a href='#' style={link}>ver extrato</a>
                                    </div>
                                </div>
                            </b.Carousel.Item>
                            
                        </b.Carousel>
                    {/* <SimpleLineChart /> */}

                    </b.Col>
                </b.Row>
                
            </b.Container>
        );
    }
}

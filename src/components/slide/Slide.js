import React, {Component, PureComponent } from 'react';
import * as b from 'react-bootstrap';
import SimpleLineChart from '../../Grafico';
import '../../moip';
import {Link} from 'react-router-dom';
import '../../css/login.css';


export default class Slide extends Component  {
    render(){ 
        return (
            <b.Container>
                <b.Row>
                    <b.Col md={{ span: 6, offset: 3 }}>
                        <h4 style={{textAlign:"center", marginTop:'60px'}}>Olá, Matheus</h4>
                            <b.Carousel className="teste">
                                <b.Carousel.Item>
                                    <div  className="divStyle" >
                                        <b.Image src={require("../../img/logo-itau.png")} width="100px"/>
                                        <p style={{margin:'20px', color:'white', float: 'right',fontWeight:'bold'}}>1234 .... .... 1121</p>
                                    <div style={{textAlign: 'center', position: 'absolute', bottom: '40px', height: '2.5rem', width:'400px' }}>
                                        <Link className="link" to="/cartao">ver extrato</Link>
                                    </div>
                                    </div>
                                </b.Carousel.Item>
                                <b.Carousel.Item>
                                    <div  className="divStyle2">
                                        <div>
                                            <b.Image src={require("../../img/logo-nubank.png")} width="100px"/>
                                            <p style={{margin:'20px', color:'white', float: 'right',fontWeight:'bold'}}>1234 .... .... 1121</p>
                                        </div>
                                        <div style={{textAlign: 'center', position: 'absolute', bottom: '40px', height: '2.5rem', width:'400px' }}>
                                            <a href='#' className="link">ver extrato</a>
                                        </div>
                                    </div>
                                </b.Carousel.Item>
                        </b.Carousel>
                    </b.Col>
                </b.Row>
            </b.Container>
        );
    }
}
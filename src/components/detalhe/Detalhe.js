import React, {Component} from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import * as b from 'react-bootstrap';
import Menu from '../menu/Menu';
export default class Detalhe extends Component {
    render(){
        return(
            <div>
                <Menu/>
				<b.Container>
              <b.Container style={{background: 'white', width: '100%', height:'100%', 'marginTop':'60px', boxShadow: '5px 5px 20px #888888', textAlign:'center', paddingBottom:'10px'}}>
                <h1>Saldo e extrato</h1>
                <b.Row>
                        <div style={{width:'90%', margin:'10px auto', background: 'rgb(229, 224, 224)', display:'flex', textAlign: 'left'}}>
                            <b.Col style={{padding:'5px 15px' }}>
                                <small>Saldo:</small>
                                <h4>R$ 200,00</h4>
                                <small>Em 27/05/2019</small>
                            </b.Col>
                            <b.Col style={{padding:'5px 15px'}}>
                                <small>Gasto médio no período:</small>
                                <h4>R$ 890,00</h4>
                            </b.Col>
                            <b.Col style={{padding:'5px 15px', float:'right'}}>
                                <small>Total de crédito:</small>
                                <h2>R$ 1.400,00</h2>
                            </b.Col>
                        </div>
                        <b.Table striped bordered hover style={{width:'90%', margin:'10px auto'}}>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Produto</th>
                                    <th>Consumidor</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15/05</td>
                                    <td>KitKat</td>
                                    <td>Matheus</td>
                                    <td>R$ 2,99</td>
                                </tr>
                                <tr>
                                    <td>16/05</td>
                                    <td>Roupa</td>
                                    <td>Thayná</td>
                                    <td>R$ 69,99</td>
                                </tr>
                            </tbody>
                        </b.Table>
                </b.Row>
              </b.Container>
              </b.Container>
            </div>
        );
    }
}
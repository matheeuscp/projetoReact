import React, {Component} from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import * as b from 'react-bootstrap';
<<<<<<< HEAD
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
=======
import MenuFooter from '../menuFooter/MenuFooter';

export default class Detalhe extends Component {
    render(){
        return(
            <div >
              <Menu/>
              <b.Container style={{width:'100%'}}>
                <b.Row className='conteudo'>
                        <b.Table   hover style={{width:'90%', margin:'10px auto',textAlign:'left'}}>
                                    <thead>
                                        <tr>
                                            <th nowrap>
                                                <small className="titulo">Saldo:</small><br/>
                                                <small className="titulo">(27/05/2019)</small>
                                            </th>
                                            <th>
                                                <small className="titulo">Gasto médio no período:</small>
                                            </th>
                                            <th>
                                                <small className="titulo">Total de crédito:</small>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td nowrap>R$ 200,00</td>
                                            <td nowrap>R$ 890,00</td>
                                            <td nowrap>R$ 1.400,00</td>
                                        </tr>
                                    </tbody>
                        </b.Table>
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
                        <div style={{width:'90%', margin:'10px auto', background: 'rgb(229, 224, 224)', display:'flex', textAlign: 'left'}}>
                            
                        </div>
                        <b.Table striped bordered hover style={{width:'90%', margin:'10px auto'}}>
                            <thead>
                                <tr>
                                    <th>
                                        <small className="titulo">Data</small>
                                    </th>
                                    <th>
                                        <small className="titulo">Produto</small>
                                    </th>
                                    <th>
                                        <small className="titulo">Consumidor</small>
                                    </th>
                                    <th>
                                        <small className="titulo">Valor</small>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15/05</td>
                                    <td>KitKat</td>
                                    <td>Matheus</td>
                                    <td>2,99</td>
                                </tr>
                                <tr>
                                    <td>16/05</td>
                                    <td>Roupa</td>
                                    <td>Thayná</td>
                                    <td>69,99</td>
                                </tr>
                            </tbody>
                        </b.Table>
                </b.Row>
<<<<<<< HEAD
              </b.Container>
              </b.Container>
=======
                </b.Container>
              <MenuFooter/>
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
            </div>
        );
    }
}
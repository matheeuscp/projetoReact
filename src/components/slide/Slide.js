import React, {Component} from 'react';
import * as b from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// import SimpleLineChart from '../../Grafico';
import '../../moip';
// import {Link} from 'react-router-dom';
import '../../css/login.css';
import Card from 'react-credit-cards';
import api from '../../services/api';
import Loading from '../load/Load';
import $ from 'jquery';
import Carregando from '../load/Carregando';
import { NavLink } from 'react-router-dom';

const teste = {
    'textAling' : 'center',
}

const link = {
    'color':'white',
    'fontWeight':'bold'
}
const carousel = {
    'minHeight':'200px',
    'padding' : '50px 0'
}
export default class Slide extends Component  {
    state= {cartaos: [],load:true}

    componentDidMount(){
        const token = localStorage.getItem('auth-token');
        $('#loading-full').show();
        api.get(`/cartao/${token}`)
        .then(response => {
            $('#loading-full').hide();
            this.setState({
                cartaos: response.data.cartaos,
                load:false
            });
        }).catch(error => {
            console.log(error);
        });
    }
    
    render(){
        let data;
        
        if(this.state.load){
            data=<Carregando/>
        }else{
            data = 
            <div>
            <h1 style={{color:'white'}}>Meus cartões</h1>
                <b.Carousel style={teste}>
                
                {this.state.cartaos.map(cartao =>(
                    <b.Carousel.Item key={cartao.id} style={teste}>
<<<<<<< HEAD
                    
                    <NavLink to={"detalhe/"+cartao.id}>
                        <Card
                            cvc=''
                            number={cartao.numero_cartao}
                            name={cartao.nome_cartao}
                            expiry={cartao.vencimento}
=======
                    <NavLink to="detalhe">
                        <Card
                        cvc=''
                        number={cartao.numero_cartao}
                        name={cartao.nome_cartao}
                        expiry={cartao.vencimento}
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
                        />
                    </NavLink>
                    </b.Carousel.Item>
                    ))}
                </b.Carousel>
            </div>
        }
                
        return(
            <div style={carousel}>
                {data}
            </div>
        )
    }
}

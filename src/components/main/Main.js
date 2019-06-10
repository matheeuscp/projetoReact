
// Importantando o React
import React from "react";
// Importantando o component Home
// Importantando o component Contact
import * as b from 'react-bootstrap';
import Cartao from '../../components/cartao/Cartao';
import Slide from '../../components/slide/Slide';
// Importando os components necessárias da lib react-materialize
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
      <div>
      <b.Container>
      <b.Row className='conteudo'>
          <b.Col md={{ span: 6, offset: 3 }}>
        <Switch>
          <Route exact path='/home' component={Slide}/>
          <Route path='/cartao' component={Cartao}/>
        </Switch>
        </b.Col>
      </b.Row>
      
  </b.Container>
      </div>
      
  </main>  
);

export default Main;
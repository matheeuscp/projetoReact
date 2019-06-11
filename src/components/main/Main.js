import React from "react";
import Cartao from '../../components/cartao/Cartao';
import Slide from '../../components/slide/Slide';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
      <div>
            <Switch>
              <Route exact path='/app' component={Slide}/>
              <Route  exact path='/cartao' component={Cartao}/>
            </Switch>           
      </div>
      
  </main>  
);

export default Main;
import React, {Component} from "react";
import CadCartao from '../../components/cartao/CadCartao';
import Slide from '../../components/slide/Slide';
import { Switch, Route } from 'react-router-dom';

class Main extends Component{
  render(){
      return (
        <main>
          <div>
                <Switch>
                
                  <Route exact path='/app' component={Slide}/>
                  <Route  exact path='/cartao' component={CadCartao}/>
                </Switch>           
          </div>
          
      </main>  
      )
  }
} 

export default Main;
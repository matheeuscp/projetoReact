import React, {Component} from "react";
import CadCartao from '../cartao/CadCartao';
import Slide from '../slide/Slide';
import { Switch, Route } from 'react-router-dom';
import Detalhe from '../detalhe/Detalhe';
class Main extends Component{
  render(){
      return (
        <main>
          <div>
<<<<<<< HEAD
                
=======
                <Switch>
                  <Route exact path='/app' component={Slide}/>
                  <Route  exact path='/cartao' component={CadCartao}/>
                </Switch>  
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
          </div>
          
      </main>  
      )
  }
} 

export default Main;
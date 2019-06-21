import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAuthenticated} from './auth';
import Login from './Login';
import Cadastro from './Cadastro';
import Logout from './Logout';
import App from './App';
import CadCartao from './components/cartao/CadCartao';
import Detalhe from './components/detalhe/Detalhe';
<<<<<<< HEAD
=======
import UserInfo from './components/userInfo/UserInfo';
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} 
        render={props => (
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname: '/login', state: {from:props.location}}}/>
            )
    )}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact  path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <PrivateRoute exact path="/app" component={App}/>
            <PrivateRoute exact path="/detalhe" component={Detalhe}/>
            <PrivateRoute exact path="/cartao" component={CadCartao}/>
<<<<<<< HEAD
            <PrivateRoute exact path="/detalhe" component={Detalhe}/>
=======
            <PrivateRoute exact path="/info" component={UserInfo}/>
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
            <PrivateRoute  path="/logout" component={Logout}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAuthenticated} from './auth';
import Login from './Login';
import Cadastro from './Cadastro';
import Logout from './Logout';
import App from './App';

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
            <Route  path="/" component={Login}/>
            <Route  path="/login" component={Login}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <PrivateRoute exact path="/app" component={App}/>
            <PrivateRoute  path="/logout" component={Logout}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
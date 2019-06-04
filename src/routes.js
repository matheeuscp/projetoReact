import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAuthenticated} from './auth';
import Login from './Login';

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
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/app" component={() => <h1>vc esta logado</h1>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
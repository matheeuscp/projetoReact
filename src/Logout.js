import React, {Component} from 'react';
import { createBrowserHistory }  from 'history';

export default class Logout extends Component{
    componentWillMount(){
        localStorage.removeItem('auth-token');
        this.props.history.push('/login');
    }
    render(){
        return null;
    }
}
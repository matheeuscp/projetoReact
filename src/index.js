import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-push-menu/styles/component.css';
import './css/login.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Routes from './routes';
ReactDOM.render(
    <Routes/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

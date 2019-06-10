import React, {Component} from 'react';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './css/app.css';

class App extends Component{
    render(){
        return (
            <div className='App'>
                <Menu/>
                <Main/>
            </div>
        )
    }
} 
export default App;
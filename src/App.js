import React, {Component} from 'react';
import Menu from './components/menu/Menu';
import Slide from './components/slide/Slide';
import "react-bootstrap/dist/react-bootstrap.min.js";


class App extends Component{
    render(){
        return (
            <div className='App'>
                <Menu/>,
                <Slide/>
            </div>
        )
    }
} 
export default App;
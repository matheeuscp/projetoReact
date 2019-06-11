import React, {Component} from 'react';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './css/app.css';
import * as b from 'react-bootstrap';


class App extends Component{
    render(){
        return (
            <div className='App'>
                <Menu/>
                <b.Container>
                    <b.Row className='conteudo'>
                        <b.Col md={{ span: 6, offset: 3 }}>
                            <Main/>
                            </b.Col>
                        </b.Row>
                </b.Container>
            </div>
        )
    }
} 
export default App;
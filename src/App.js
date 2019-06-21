import React, {Component} from 'react';
import Menu from './components/menu/Menu';
import Slide from './components/slide/Slide';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './css/app.css';
import * as b from 'react-bootstrap';
<<<<<<< HEAD
=======
import MenuFooter from './components/menuFooter/MenuFooter';

>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce

class App extends Component{

    render(){
        return (
            <div className='App'>
                <Menu/>
                <b.Container>
                    <b.Row className='conteudo'>
<<<<<<< HEAD
                            <b.Col md={{ span: 6, offset: 3 }}>
                                <Slide/>                        
=======
                        <b.Col md={{ span: 6, offset: 3 }}>
                                    <Main/>
>>>>>>> a689d050ac5cc24bd1ac85146d259113f5c53cce
                            </b.Col>
                        </b.Row>
                    </b.Container>
                <MenuFooter/>                   

            </div>
        )
    }
} 
export default App;
import React, {Component} from 'react';
import * as b from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component 
{
    render(){
        return (
            <b.Navbar id="menu" expand="lg"  variant="dark">
                <b.Container>
                    <img id="logo" src={require("../../img/logo.png")} width="60px"/> 
                </b.Container>
            </b.Navbar>
        )
    }
}
// <b.NavDropdown title="" id="basic-nav-dropdown" className="teste">
//                         <b.NavDropdown.Item href="/logout">Logout</b.NavDropdown.Item>
//                     </b.NavDropdown>
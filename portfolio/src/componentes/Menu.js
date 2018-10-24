
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/Menu.css';
import '../css/hover.css';

class Menu extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmoun() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        var element = document.getElementById("navbar-principal");
        if (document.documentElement.scrollTop > 80) {
            element.classList.add("nav-fundo");
        } else {
            element.classList.remove("nav-fundo");
        }

    }

    render() {
        return (
            <Navbar className="nav" id="navbar-principal">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home"><h3 className="titulo">JOÃO GOULART</h3></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse >
                    <Navbar.Text pullRight><Navbar.Link className="nav-menu hvr-underline-from-left" href="#">CONTATO</Navbar.Link></Navbar.Text>
                    <Navbar.Text pullRight><Navbar.Link className="nav-menu hvr-underline-from-left" href="#habilidade">HABILIDADES</Navbar.Link></Navbar.Text>
                    <Navbar.Text pullRight><Navbar.Link className="nav-menu hvr-underline-from-left" href="#">DETALHES</Navbar.Link></Navbar.Text>

                    <Navbar.Text pullRight><Navbar.Link className="nav-menu hvr-underline-from-left" href="#">BIOGRAFIA</Navbar.Link></Navbar.Text>
                    <Navbar.Text pullRight><Navbar.Link className="nav-menu hvr-underline-from-left" href="#sobre">SOBRE</Navbar.Link></Navbar.Text>

                </Navbar.Collapse>
            </Navbar>
        );
    }


}

export default Menu;
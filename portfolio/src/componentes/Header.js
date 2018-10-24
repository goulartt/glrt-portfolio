import React, { Component, Fragment } from 'react';
import { Carousel, Col, Image } from 'react-bootstrap';
import '../css/Header.css';
import Menu from './Menu';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <Menu></Menu>
                <Carousel>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/header.jpg')} />
                        <Carousel.Caption className="content">
                            <h3>Confira meu portfólio pessoal!</h3>
                            <p>Conheça um pouco sobre minha vida e meus trabalhos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/foto-recode.jpeg')} />
                        <Carousel.Caption className="content">
                            <h3>2!</h3>
                            <p>Conheça um pouco sobre minha vida e meus trabalhos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        );
    }

    
}

export default Header;

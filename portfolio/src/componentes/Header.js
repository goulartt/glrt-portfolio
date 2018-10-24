import React, { Component, Fragment } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../css/Header.css';
import Menu from './Menu';
import Fade from 'react-reveal/Fade';



class Header extends Component {
    render() {
        return (
            <Fragment>
                <Menu></Menu>
                <Carousel interval={3000} indicators={false} controls={false}>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/header.jpg')} />
                        <Carousel.Caption className="content">
                            <Fade top big>
                                <h1>CONFIRA MEU PORTFÓLIO PESSOAL!</h1>
                            </Fade>
                            <Fade bottom big>
                                <p>Conheça um pouco sobre minha vida e meus trabalhos</p>
                                <Button className="btn-outline">CONHEÇA ALGUNS DOS MEUS TRABALHOS</Button>
                            </Fade >

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/foto-recode.jpeg')} />
                        <Carousel.Caption className="content">
                            <Fade left big>
                                <h1>CONFIRA MEU PORTFÓLIO PESSOAL!</h1>
                            </Fade>
                            <Fade right big>
                                <p>Conheça um pouco sobre minha vida e meus trabalhos</p>
                                <Button className="btn-outline">CONHEÇA ALGUNS DOS MEUS TRABALHOS</Button>
                            </Fade >
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        );
    }


}

export default Header;

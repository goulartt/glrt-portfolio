import React, { Component, Fragment } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import animateScrollTo from 'animated-scroll-to';

import '../css/Header.css';
import Menu from './Menu';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <Menu></Menu>
                <Carousel interval={4000} indicators={false} controls={false} pauseOnHover={false}>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/header.jpg')} />
                        <Carousel.Caption className="content">
                            <Fade top big>
                                <h1>CONFIRA MEU PORTFÓLIO PESSOAL!</h1>
                            </Fade>
                            <Fade bottom big>
                                <p>Conheça um pouco sobre minha vida e meus trabalhos</p>
                                <Button onClick={() => animateScrollTo(document.querySelector('#about')) } className="btn-outline btn-white"><span>CONFIRA</span></Button>
                            </Fade >

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="img-gray img-responsive" alt="require" src={require('../img/foto-recode.jpeg')} />
                        <Carousel.Caption className="content">
                            <Fade left big>
                                <h1>VEJA ALGUMAS DAS MINHAS PRINCIPAIS HABILIDADES!</h1>
                            </Fade>
                            <Fade right big>
                                <p>Conheça quais são minhas principais habilidades de programação</p>
                                <Button onClick={() => animateScrollTo(document.querySelector('#skills')) } className="btn-outline btn-white">CONFIRA</Button>
                            </Fade >
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        );
    }


}

export default Header;

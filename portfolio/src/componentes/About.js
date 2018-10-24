import React, { Component, Fragment } from 'react';
import '../css/About.css';
import { Grid, Row, Col, Image, Glyphicon } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';



class About extends Component {
    render() {
        return (
            <Fragment>
                <section id="sobre">
                    <Fade bottom>

                        <Grid className="about">
                            <Row>
                                <Col xs={6} md={6} sm={12} xs={12}>
                                    <Image src={require('../img/me.jpg')} circle width={500} height={450} responsive />
                                    <p className="me">Me chamo <span className="nome">João Victor Goulart de Almeida</span>. Sou Full Stack Web Developer,
                            nasci em Assis - SP, atualmente morando em Londrina - PR e trabalhando na ATOS como Analista de Sistemas Pleno.</p>
                                </Col>
                                <Col xs={6} md={6} sm={12} xs={12}>
                                    <h1>João Victor Goulart de Almeida</h1>
                                    <hr />

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon className="icon" glyph="heart" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>INTERESSES</h4>
                                        <ul>
                                            <li>
                                                Desenvolvimento Web
                                    </li>
                                            <li>
                                                Desenvolvimento Mobile
                                    </li>
                                            <li>
                                                Cloud Computing
                                    </li>
                                            <li>
                                                Inteligência Artificial
                                    </li>
                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon className="icon" glyph="comment" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>IDIOMAS</h4>
                                        <ul>
                                            <li>
                                                Português - Nativo
                                    </li>
                                            <li>
                                                Inglês - Avançado
                                    </li>
                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon className="icon" glyph="education" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>FORMAÇÃO</h4>
                                        <ul>
                                            <li>
                                                2015/ETEC - Ensino Médio e Técnico em Informática
                                    </li>
                                            <li>
                                                2019/UTFPR - Engenharia de Software
                                    </li>
                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon className="icon" glyph="knight" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>ATIVIDADES</h4>
                                        <ul>
                                            <li>
                                                Desenvolvimento de Sistemas Web
                                    </li>
                                            <li>
                                                Desenvolvimento de Aplicativos Multiplataforma
                                    </li>
                                            <li>
                                                Pseudo Cinéfilo
                                    </li>
                                        </ul>
                                    </Col>
                                </Col>
                            </Row>
                        </Grid>
                    </Fade>
                </section>
            </Fragment>
        );
    }
}

export default About;

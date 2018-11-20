import React, { Component, Fragment } from 'react';
import '../css/About.css';
import { Grid, Row, Col, Image, Glyphicon, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const resume = require('../files/curriculo_ingles.pdf');

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <section id="about">
                    <Fade bottom>

                        <Grid className="about-grid">
                            <Row>
                                <Col xs={12} md={12} sm={12} xs={12}>
                                    <h1 className="title">QUEM SOU EU?</h1>
                                </Col>
                                <Col xs={6} md={6} sm={12} xs={12}>
                                    <Image src={this.props.about.foto} circle width={400} height={350} />
                                    <p className="me">{this.props.about.resumo}</p>
                                    <br />
                                    <Button className="btn-outline btn-black" href={resume} target="_blank" download>Currículo PDF</Button>
                                    <Button className="btn-outline btn-red" href={this.props.about.certificado} target="_blank" >Certificado ORACLE</Button>
                                </Col>
                                <Col xs={6} md={6} sm={12} xs={12}>
                                    <h1>{this.props.about.nome}</h1>
                                    <hr />

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon glyph="heart" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>INTERESSES</h4>
                                        <ul>

                                            {this.props.about.interesses !== undefined && this.props.about.interesses.map(interesse => {
                                                return (
                                                    <li>
                                                        {interesse}
                                                    </li>
                                                );
                                            })}

                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon glyph="comment" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>IDIOMAS</h4>
                                        <ul>
                                            {this.props.about.idiomas !== undefined && this.props.about.idiomas.map(idiomas => {
                                                return (
                                                    <li>
                                                        {idiomas}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon glyph="education" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>FORMAÇÃO</h4>
                                        <ul>
                                            {this.props.about.formacao !== undefined && this.props.about.formacao.map(f => {
                                                return (
                                                    <li>
                                                        {f}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Col>

                                    <Col xs={1} md={1} sm={2} xs={2}>
                                        <Glyphicon glyph="knight" />
                                    </Col>
                                    <Col xs={11} md={11} sm={10} xs={10}>
                                        <h4>ATIVIDADES</h4>
                                        <ul>
                                            {this.props.about.atividades !== undefined && this.props.about.atividades.map(a => {
                                                return (
                                                    <li>
                                                        {a}
                                                    </li>
                                                );
                                            })}
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

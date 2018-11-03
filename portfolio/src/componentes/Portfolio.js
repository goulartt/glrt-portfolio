
import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


import '../css/Portfolio.css';
import CustomModal from './CustomModal';

const ecommerce = {
    title: 'E-Commerce para fármacias',
    text: 'Em 2017 trabalhei no meu primeiro projeto, se tratava de desenvolver um ecommerce que era distribuido para os nossos clientes utilizarem,'+
    ' era utilizado tecnologias de JSF, Hibernate e Spring'
};

class Portfolio extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            content: {
                title: '',
                text: ''
            }
        };
    }



    handleClose() {
        this.setState({ show: false });
    }

    handleShow(content) {
        this.setState({ show: true, content });
    }



    render() {
        return (
            <section id="portfolio">
                <Grid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h1>PORTFÓLIO</h1>
                            <hr />
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h3>Confira alguns dos projetos no qual já participei!</h3>
                        </Col>

                    </Row>
                    <Row>
                        <Fade right>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/ecommerce.png')} responsive />
                                    <div className="middle">
                                        <div  onClick={() => this.handleShow(ecommerce)} className="text">E-commerce </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/cloud.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow('teste')} className="text">Microserviços e Cloud</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/barber-logo.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow('teste')} className="text">App para Barbearia</div>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                        <Fade left>                       
                         <Col lg={4} md={4} sm={6} xs={12}>
                            <div className="port-item">
                                <Image className="img-portfolio" src={require('../img/caixa.png')} responsive />
                                <div className="middle">
                                    <div onClick={() => this.handleShow('teste')} className="text">Caixa Seguradora</div>
                                </div>
                            </div>
                        </Col>

                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/volks.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow('teste')} className="text">Volkswagen</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/bradesco.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow('teste')} className="text">Bradesco</div>
                                    </div>
                                </div>
                            </Col>
                            </Fade>

                    </Row>
                </Grid>

                    <CustomModal show={this.state.show} content={this.state.content} close={this.handleClose}></CustomModal>
            </section>
                );
            }
        
        
        }
        
        
export default Portfolio;       
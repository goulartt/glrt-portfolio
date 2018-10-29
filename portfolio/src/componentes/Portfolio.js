
import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Modal from 'react-responsive-modal';
import Fade from 'react-reveal/Fade';


import '../css/Portfolio.css';


class Portfolio extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }



    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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
                            <hr />
                        </Col>

                    </Row>
                    <Row>
                        <Fade right>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/ecommerce.png')} responsive />
                                    <div class="middle">
                                        <div onClick={this.handleShow} class="text">E-commerce </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/cloud.png')} responsive />
                                    <div class="middle">
                                        <div onClick={this.handleShow} class="text">Microserviços e Cloud</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/barber-logo.png')} responsive />
                                    <div class="middle">
                                        <div onClick={this.handleShow} class="text">App para Barbearia</div>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                        <Fade left>                       
                         <Col lg={4} md={4} sm={6} xs={12}>
                            <div className="port-item">
                                <Image className="img-portfolio" src={require('../img/caixa.png')} responsive />
                                <div class="middle">
                                    <div onClick={this.handleShow} class="text">Caixa Seguradora</div>
                                </div>
                            </div>
                        </Col>

                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/volks.png')} responsive />
                                    <div class="middle">
                                        <div onClick={this.handleShow} class="text">Volkswagen</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item">
                                    <Image className="img-portfolio" src={require('../img/bradesco.png')} responsive />
                                    <div class="middle">
                                        <div onClick={this.handleShow} class="text">Bradesco</div>
                                    </div>
                                </div>
                            </Col>
                            </Fade>

                    </Row>
                </Grid>

                    <div>
                        <Modal open={this.state.show} onClose={this.handleClose} center>
                            <div className="modal-text">
                                <h2>aaaaaaaaaaaaaaaaaaaaaaa</h2>
                                <p>testedsadasdasd
    
                                    dsadas
                                    dasdsada
                                    dasdsadadas
                        </p>
                            </div>
                        </Modal>
                    </div>
            </section>
                );
            }
        
        
        }
        
        
export default Portfolio;       
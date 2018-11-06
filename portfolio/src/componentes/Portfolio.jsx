
import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


import '../css/Portfolio.css';
import CustomModal from './CustomModal';

const ecommerce = {
    title: 'E-Commerce para fármacias',
    text: [<p>Quando entrei como estágiario na área de desenvolvimento, esse foi o primeiro projeto que entrei. Na VSM,
    estava se desenvolvendo um produto novo, iria integrar o ERP da farmacia com o site e-commerce. Trabalhei
    bastante no front-end e back end da aplicação.</p>,
    <p>O maior desafio nesse projeto foi desenvolver um robô batch de integração, para rodar ao lado do cliente
    e enviar os produtos e atualizações do ERP para a API do e-commerce do cliente.</p>,
    <p>Até hoje eles usam o meu layout em produção: <a href="https://www.vsmshop.com.br/" target="_blank">Link</a></p>]
};

const cloud = {
    title: 'Cloud & Microserviços',
    text: [<p>Após ter me destacado no projeto do E-commerce, fui convocado para o mais novo projeto da empresa, desenvolver
        o ambiente cloud e arquitetura de Business Inteligence. Foi uma experiência incrível, aprendi conseitos
        de Data Warehouse e Microservices, graças a essa experiência consegui alavancar minha carreira.
    </p>]
};

const caixa = {
    title: 'Caixa Seguradora',
    text: [<p>Depois da minha experiência anterior, consegui um cargo como pleno na Atos em Londrina. E meu primeiro
        projeto foi trabalhar no portal de seguros de vida para pessoas jurídicas. Foi uma experiência sensacional,
        um projeto grande com mais de 30 pessoas trabalhando nele.
    </p>]
};
const barber = {
    title: 'Rodrigo Barbearia',
    text: [<p>Meu tio possui uma barbearia na cidade de Assis - SP e me pediu para criar uma aplicativo para o negócio dele.
    </p>,
    <p>Utilezei a tecnologia híbrida do Ionic com Angular para construir a solução e a aplicação já se encontra disponível para Android no Play Store.
    </p>]
};

const volks = {
    title: 'Volkswagen',
    text: [<p>Após concluir minhas atividades na caixa, fui designado no projeto da Volkswagen.
        O projeto consiste em manter 17 aplicações realizar SSO e ter um unico ponto de autenticação.
    </p>,
    <p>O maior desafio nesse projeto foi configurar o ponto de iDP para as aplicações e após conseguir realizar
        a integração em uma delas, bastou replicar as alterações para as demais, no momento o projeto está em
        fase de homologação.
    </p>]
};

const bradesco = {
    title: 'Bradesco',
    text: [<p>Foi acionado dentro da ATOS para trabalhar na sustentação de um projeto do Bradesco.
    </p>,
    <p>Por algum tempo realizei manutenção pontuais nos sistemas de previdência do Bradesco utilizando Java.
    </p>]
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
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/ecommerce.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(ecommerce)} className="text">E-commerce </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/cloud.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(cloud)} className="text">Microserviços e Cloud</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/barber-logo.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(barber)} className="text">App para Barbearia</div>
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                        <Fade left>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/caixa.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(caixa)} className="text">Caixa Seguradora</div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/volks.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(volks)} className="text">Volkswagen</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <div className="port-item hvr-bob">
                                    <Image className="img-portfolio" src={require('../img/bradesco.png')} responsive />
                                    <div className="middle">
                                        <div onClick={() => this.handleShow(bradesco)} className="text">Bradesco</div>
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
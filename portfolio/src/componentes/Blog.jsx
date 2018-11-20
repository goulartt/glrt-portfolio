import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import '../css/hover.css';
import '../css/Blog.css';




class Blog extends Component {



    render() {
        return (
            <section id="blog">
                <Grid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h1>BLOG</h1>

                            <h4>Confira algumas novidades no mundo da WEB</h4>
                        </Col>
                    </Row>


                    <Row>
                        <Fade left>
                            <Col xs={12} md={4} sm={12} lg={4} >
                                <a className="blog-link hvr-grow" target="_blank" href="https://imasters.com.br/back-end/node-js-utilizando-async-await-com-express-js">
                                    <Thumbnail src={require('../img/async.jpeg')} className="blog-item" alt="242x200">
                                        <h3 className="blogTitle">Node JS: utilizando Async Await com Express.js</h3>
                                        <p className="author">Thiago Adriano</p>

                                    </Thumbnail>
                                </a>
                            </Col>
                        </Fade>
                        <Fade top>
                            <Col xs={12} md={4} sm={12} lg={4}>
                                <a className="blog-link hvr-grow" target="_blank" href="https://imasters.com.br/front-end/realidade-aumentada-na-web-com-10-linhas-de-html">
                                    <Thumbnail src={require('../img/realidade-aumentada.jpg')} className="blog-item" alt="242x200">
                                        <h3 className="blogTitle">Realidade aumentada na WEB só com 10 linhas de código HTML</h3>
                                        <p className="author">Diego Pinho</p>

                                    </Thumbnail>
                                </a>
                            </Col>
                        </Fade>
                        <Fade right>
                            <Col xs={12} md={4} sm={12} lg={4}>
                                <a className="blog-link hvr-grow" target="_blank" href="https://imasters.com.br/apis-microsservicos/api-gateway-em-arquitetura-de-microservices-com-node-js">
                                    <Thumbnail src={require('../img/api.png')} className="blog-item" alt="242x200">
                                        <h3 className="blogTitle">API Gateway em arquitetura de microservices com Node.js</h3>
                                        <p className="author">Luiz Junior</p>

                                    </Thumbnail>
                                </a>
                            </Col>
                        </Fade>
                    </Row>
                </Grid>
            </section>
        );
    }


}

export default Blog;
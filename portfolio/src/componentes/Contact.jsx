
import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel, Grid, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import '../css/Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section id="contact">
        <h1 style={{ textAlign: 'center' }} >Entre em contato</h1>
        <Grid>
          <Col lg={6} xs={6} sm={12} xs={12}>
            <p>Sinta-se a vontade para entrar em contato comigo. Estou sempre disposto a novos desafios e projetos.</p>
            <p>Caso necessite de ajuda em alguma tecnologia que tenho conhecimento não exite em entrar em contato, estou sempre disposo ajudar.</p>

            <br />
            <a className="blog-link" href={this.props.social.facebook} target="_blank">
              <FaFacebook className="social-icon" />
            </a>
            <a className="blog-link" href={this.props.social.linkedin} target="_blank">
              <FaLinkedin className="social-icon" /></a>
            <a className="blog-link" href={this.props.social.github} target="_blank">
              <FaGithubSquare className="social-icon" /></a>
          </Col>
          <Col lg={6} xs={6} sm={12} xs={12}>
            <Form horizontal action="https://formspree.io/jv.goulart.almeida@hotmail.com" method="POST">



              <Row>
                <FormGroup controlId="formHorizontalNome">
                  <Col componentClass={ControlLabel} sm={2}>
                    Nome
              </Col>
                  <Col sm={6}>
                    <FormControl type="text" name="name" placeholder="Nome" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
            </Col>
                  <Col sm={6}>
                    <FormControl type="email" name="_replyto" placeholder="Email" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalAssunto">
                  <Col componentClass={ControlLabel} sm={2}>
                    Assunto
            </Col>
                  <Col sm={6}>
                    <FormControl name="subject" type="text" placeholder="Assunto" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalMensagem">
                  <Col componentClass={ControlLabel} sm={2}>
                    Mensagem
            </Col>
                  <Col sm={6}>
                    <FormControl name="message" componentClass="textarea" placeholder="Mensagem" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={6}>
                    <Button className="btn-outline btn-white" value="Send" type="submit">Enviar</Button>
                  </Col>
                </FormGroup>
              </Row>
            </Form>
          </Col>


        </Grid>

      </section>
    );
  }


}

export default Contact;
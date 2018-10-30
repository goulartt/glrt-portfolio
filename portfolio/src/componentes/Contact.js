
import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel, Grid, Row } from 'react-bootstrap';

import '../css/Contact.css';


class Contact extends Component {



  render() {
    return (
      <section id="contact">
      <h1 style={{ textAlign: 'center' }} >Entre em contato</h1>
        <Grid>
        <Col lg={6} xs={6} sm={12} xs={12}>
          <h3>Redes Sociais</h3>
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
                  <Button bsStyle="primary" value="Send" type="submit">Enviar</Button>
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

import React, { Component, Fragment } from 'react';
import { Col, Button, Grid, Row } from 'react-bootstrap';

import '../css/Footer.css';


class Footer extends Component {



  render() {
    return (
      <footer id="footer">
          <Grid>
            <Row>
                João Victor Goulart de Almeida - Densenvolvedor Web 2018
            </Row>
            <Row>
                jv.goulart.almeida@hotmail.com
            </Row>
            <Row>
              +55 43 998 149 208
            </Row>
          </Grid>
      </footer>
    );
  }


}

export default Footer;

import React, { Component, Fragment } from 'react';
import { Col, Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import '../css/Details.css';


class Details extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="details">
        <Grid>
          <Row>
            <h1 className="detailsTitle" >Mais informações</h1>
            <hr />
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="sub">
                <Glyphicon className="icon" glyph="heart" />
                <h3 className="detailsSub">BIOGRAFIA</h3>
              </div>
              <p> {this.props.details.biografia}</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="sub">
                <Glyphicon className="icon" glyph="briefcase" />
                <h3 className="detailsSub">TRABALHO</h3>
              </div>
                
              <p>            {this.props.details.trabalho}

              </p>
      
            </Col>

            <a href="https://github.com/goulartt" target="_blank">
              <img src={require('../img/github.png')} height="210" width="500" className="github hvr-bounce-in"></img>
            </a>
            <h3 className="github-text">GITHUB</h3>
            <Col lg={12} md={12} sm={12} xs={12}>

              <p style={{ textAlign: 'center' }}>Confira alguns dos meus projetos no github</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }


}

export default Details;
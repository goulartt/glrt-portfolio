
import React, { Component, Fragment } from 'react';
import {  Col, Button, Grid, Row } from 'react-bootstrap';

import '../css/Details.css';


class Details extends Component {



  render() {
    return (
      <section id="details">
        <Grid>
          <Row>
            <h1 className="detailsTitle" >Mais informações</h1>
            <hr />
          </Row>
        </Grid>
      </section>
    );
  }


}

export default Details;
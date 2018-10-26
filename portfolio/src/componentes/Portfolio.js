
import React, { Component, Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../css/Portfolio.css';

class Portfolio extends Component {




    render() {
        return (
            <Fragment>
                <section id="portfolio">
                    <Grid >
                        <Row>
                            <Col xs={12} md={12} sm={12} xs={12}>
                                <h1>PORTFÓLIO</h1>
                        </Col>
                        </Row>
                    </Grid>
                </section>
            </Fragment>
        );
    }


}

export default Portfolio;
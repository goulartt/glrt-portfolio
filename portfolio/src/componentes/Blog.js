import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MediaCard from './MediaCard';

import '../css/Blog.css';


const blog1 = {
    title: 'Teste', 
    conteudo: 'Teste teste aaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://www.google.com'
}


class Blog extends Component {



    render() {
        return (
            <section id="blog">
                <Grid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h1>BLOG</h1>
                            <hr />
                        </Col>
                    </Row>
                </Grid>

                <MediaCard content={blog1} img={require("../img/bradesco.png")}></MediaCard>
            </section>
        );
    }


}

export default Blog;
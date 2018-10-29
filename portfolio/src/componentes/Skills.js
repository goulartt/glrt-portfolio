import React, { Component, Fragment } from 'react';
import '../css/Skills.css';
import { Grid, Row, Col } from 'react-bootstrap';
import {  Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';


class Skills extends Component {
    render() {
        return (

            <Fragment>
                <div className="skillsContainer">

                    <Grid >
                        <Row className="skills" id="habilidade">
                            <Col xs={12} md={12} sm={12} xs={12}>
                                <h1>SKILLS</h1>
                            </Col>
                            <Col xs={12} md={12} sm={12} xs={12}>
                                <h3>QUAIS SÃO AS MINHAS HABILIDADES?</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={6} sm={12} xs={12}>
                                <Bar data={dataJava} options={optionsJava} />
                            </Col>

                            <Col xs={6} md={6} sm={12} xs={12}>
                                <Bar data={dataJavascript} options={optionsJavascript} />
                            </Col>
                        </Row>
                        <div style={{ height: '5vh ' }}/>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

defaults.global.defaultFontColor = 'white';

const dataJava = {
    datasets: [{
        data: [98, 80, 75, 95, 70, 60],
        backgroundColor: [
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)'

        ]
    }],
    labels: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Java 8 API',
        'Microserviços',
        'Kotlin'
    ],
    borderWidth: 1
}

const dataJavascript = {
    datasets: [{
        data: [80, 100, 65, 95, 80, 85],
        backgroundColor: [
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.3)'

        ]
    }],
    labels: [
        'ES7',
        'Ionic',
        'React-Native',
        'Angular',
        'React',
        'Node.js'
    ],
    borderWidth: 1
}

const optionsJava = {
    responsive: true,
    legend: {
        display: false,
        labels: {
            fontColor: 'white'
        }
    },
    title: {
        display: true,
        text: 'Java Skills'
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }

}

const optionsJavascript = {
    responsive: true,
    legend: {
        display: false,
        labels: {
            defaultFontColor: 'white'
        }
    },
    title: {
        display: true,
        text: 'Javascript skills'
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }

}

export default Skills;
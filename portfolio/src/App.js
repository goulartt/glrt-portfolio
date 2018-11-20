import React, { Component, Fragment } from 'react';

import './App.css';

import Header from './componentes/Header';
import About from './componentes/About';
import Skills from './componentes/Skills';
import Portfolio from './componentes/Portfolio';
import Blog from './componentes/Blog';
import Contact from './componentes/Contact';
import Details from './componentes/Details';
import Footer from './componentes/Footer';
import axios from 'axios';

const url = 'https://portfolio-59337.firebaseapp.com/api/v1/'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { details: {}, social: {}, skill: {}, about: {}, portfolio: {} }

    this.carregaAbout = this.carregaAbout.bind(this);
    this.carregaSkills = this.carregaSkills.bind(this);
    this.carregaDetails = this.carregaDetails.bind(this);
    this.carregaSocial = this.carregaSocial.bind(this);
    this.carregaPortfolio = this.carregaPortfolio.bind(this);
  }

  componentWillMount() {
    this.carregaAbout();
    this.carregaSkills();
    this.carregaPortfolio();
    this.carregaDetails();
    this.carregaSocial();
  }

  carregaAbout() {
    axios.get(url + 'about')
      .then(res => {
        let about =  Object.values(res.data.about)[0];
        this.setState({ about });
      })
      .catch(err => console.log(err));
  }

  carregaDetails() {
    axios.get(url + 'details')
      .then(res => {
        let details = Object.values(res.data.details)[0] 
        this.setState({ details});
      })
      .catch(err => console.log(err));
  }

  carregaSocial() {
    axios.get(url + 'social')
      .then(res => {
        this.setState({ social: Object.values(res.data.social)[0] });
      })
      .catch(err => console.log(err));
  }
  carregaPortfolio() {
    axios.get(url + 'portfolio')
      .then(res => {
        let portfolio = Object.values(res.data.portfolio)[0];
        this.setState({ portfolio });
      })
      .catch(err => console.log(err));
  }

  carregaSkills() {
    axios.get(url + 'skill')
      .then(res => {

        let skills = Object.values(res.data.skill)[0];
        let java = skills.java;
        let javascript = skills.javascript;

        let nivelJava = [];
        let nivelJavascript = [];

        let labelJava = [];
        let labelJavascript = []

        for (var i = 0; i < java.length; i++) {
          nivelJava.push(java[i].nivel);
          labelJava.push(java[i].nome);
        }

        for (var i = 0; i < javascript.length; i++) {
          nivelJavascript.push(javascript[i].nivel);
          labelJavascript.push(javascript[i].nome);
        }

        this.setState({
          skill: {
            java: {
              datasets: [{
                data: nivelJava,
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
              labels: labelJava,
              borderWidth: 1
            },
            javascript: {
              datasets: [{
                data: nivelJavascript,
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
              labels: labelJavascript,
              borderWidth: 1
            }
          }

        });
        console.log(this.state)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (

      <Fragment>
        {(Object.keys(this.state.about).length === 0 &&
          Object.keys(this.state.social).length === 0 &&
          Object.keys(this.state.portfolio).length === 0 &&
          Object.keys(this.state.skill).length === 0 &&
          Object.keys(this.state.details).length === 0) ?
          <Fragment>
            <div className="body">
              <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
              </div>
            </div>
          </Fragment>
          :
          <Fragment>
            <Header></Header>
            <About about={this.state.about}></About>
            <Skills skills={this.state.skill}></Skills>
            <Portfolio portfolio={this.state.portfolio}></Portfolio>
            <Blog></Blog>
            <Details details={this.state.details}></Details>
            <Contact social={this.state.social}></Contact>
            <Footer></Footer>
          </Fragment>


        }
      </Fragment>

    );
  }

  loading() {

  }


}

export default App;

import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './componentes/Header.jsx';
import About from './componentes/About.jsx';
import Skills from './componentes/Skills.jsx';
import Portfolio from './componentes/Portfolio.jsx';
import Blog from './componentes/Blog.jsx';
import Contact from './componentes/Contact.jsx';
import Details from './componentes/Details.jsx';
import Footer from './componentes/Footer.jsx';


class App extends Component {

  
  render() {
    return (
      <Fragment>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Details></Details>
        <Contact></Contact>
        <Footer></Footer>


      </Fragment>
    );
  }
}

export default App;

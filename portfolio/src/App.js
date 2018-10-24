import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './componentes/Header';
import About from './componentes/About';
import Skills from './componentes/Skills';

class App extends Component {


  render() {
    return (
      <Fragment>
        <Header></Header>
        <About></About>
        <Skills></Skills>



      </Fragment>
    );
  }
}

export default App;

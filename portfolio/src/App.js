import React, { Component, Fragment } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

import Header from './componentes/Header';
import About from './componentes/About';

class App extends Component {


  render() {
    return (
      <Fragment>
        <Header></Header>
        <About></About>
      </Fragment>
    );
  }
}

export default App;

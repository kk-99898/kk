import React, { Component,Fragment } from 'react';
import {Header,Main, Footer, Cebian} from './components'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
        <Cebian />
      </Fragment>
    );
  }
}

export default App;

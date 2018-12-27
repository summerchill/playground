import React, { Component } from 'react';
import logo from './logo.svg';
import './style.scss';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    );
  }
}

export default App;

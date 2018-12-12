import React, { Component } from 'react';
import './styles/App.scss';
import Header from './modules/header'
import Body from './modules/body'
import Footer from './modules/footer'

class App extends Component {
  render() {
    return (
      <div className="blog">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/App.scss';
import Header from './modules/header'
import Body from './modules/body'
import Footer from './modules/footer'

function App(props) {
 
    const { postList } = props;
    return (
      <div className="blog">
        <Header/>
        <Body data={postList}/>
        <Footer/>
      </div>
    )
}

export default App;

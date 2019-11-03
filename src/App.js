import React from 'react';
import Space from './space-kurzgesagt.svg';
import './App.css';

class MainApp extends React.Component{
  render(){
    return(
      <div>
        <div className="header">
          <img alt="Universe" src={Space} className="App-header-img"/>
        </div>
        <div className="App-title"><h1>Explore Infinity</h1></div>
        <article className="App-description">
          Exploring the infinity of the cosmos
        </article>
      </div>
    )
  }
}

export default MainApp;

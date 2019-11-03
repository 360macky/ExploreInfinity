import React from 'react';
import Space from './space-kurzgesagt.svg';
import './App.css';

class News extends React.Component {
  render(){
    return(
      <div className="news">
        <a href="https://www.sciencemag.org/journal-category/astronomy">Astronomy Section - Science Magazine</a>
        <a href="https://www.space.com/news">Space News - Space.com</a>
        <a href="http://www.sci-news.com/news/astronomy">Astronomy News - Sci-News</a>
      </div>
    )
  }
}

class MainApp extends React.Component {
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
        <section className="news-section">
          <h2>News Resources</h2>
          <News/>
        </section>
      </div>
    )
  }
}

export default MainApp;

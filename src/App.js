import React from 'react';
import Space from './space-kurzgesagt.svg';
import './App.css';
import NewsItem from './NewsItem';
import newsResources from './NewsResources'

function MainApp() {
  
  const newsItems = newsResources.map(item => <NewsItem url={item.url} title={item.title} id={item.id}/>)

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
      </section>
      <center>
        {newsItems}
      </center>
    </div>
  )
}

export default MainApp;

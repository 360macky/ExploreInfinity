import React from 'react';
import './App.css';
import NewsItem from './NewsItem';
import newsResources from './NewsResources'

const newsItems = newsResources.map(item => <NewsItem url={item.url} title={item.title} id={item.id}/>)

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/.">ExploreInfinity</a>
      </nav>
    </div>
  )  
}

function Cover() {
  return(
    <div>
      <div className="jumbotron m-3">
        <h1 className="display-4">Hello universe!</h1>
        <p className="lead">A sractch website developed with React</p>
      </div>
    </div>
  )
}

function NewsSection() {
  return(
    <div className="card m-3 p-3">
      <h1>News Resources</h1>
      <ul>
        {newsItems}
      </ul>
    </div>
  )
}

function MainApp() {
  return(
    <div>
      <Header/>
      <Cover/>
      <NewsSection/>
    </div>
  )
}

export default MainApp;

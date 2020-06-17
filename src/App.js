import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const articleUrl = 'http://localhost:3001/articles'
const userUrl = 'http://localhost:3001/users'

const apiUrl = ' https://newsapi.org/v2/top-headlines?country=us&apiKey=cdb0beec98514ab6b5dfc4ccd7a83953'
const urlHeaders = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

class App extends Component {
  state = {  
    articles: [],
    apiArticles: [],
    favoriteArticles: [],
    search: '',
    userInfo: []
  }

componentDidMount(){
  fetch(articleUrl)
  .then(res => res.json())
  .then(data => this.setState({articles: data}))
  fetch(userUrl)
  .then(res => res.json())
  .then(data => this.setState({userInfo: data}))
  this.persistArticlesToBackEnd()
}

persistArticlesToBackEnd = () => {
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    let currentArticles = [...data.articles,...this.state.articles]
    this.setState({
      articles: currentArticles
    })
  })
}

searchArticle = (event) => {
  this.setState({search: event.target.value})
}

returnFilteredArticles = () => {
  let newArticles = this.state.articles.filter(article => {
    return article.title.toLowerCase().includes(this.state.search.toLowerCase())
  })
  return newArticles 
}

  render() { 
    return (  
      <div>
        <MainContainer 
          favoriteArticles={this.state.favoriteArticles}
          searchArticle={this.searchArticle}
          search={this.state.search}
          articles={this.returnFilteredArticles()}
          userInfo={this.state.userInfo}
        /> 
      </div>
    );
  }
}
 
export default App;

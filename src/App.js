import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

const articleUrl = 'http://localhost:3001/articles'
const userUrl = 'http://localhost:3001/users'

class App extends Component {
  state = {  
    articles: [],
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

addToFavs = (article) => {

  this.setState({favoriteArticles: [...this.state.favoriteArticles, article]})
}

removeFromFavs = (article) => {
  console.log('removing...', article)
  this.setState({favoriteArticles: this.state.favoriteArticles.filter(a => a !== article )})
}



  render() { 
    return (  
      <div>
        <MainContainer 
          removeFromFavs={this.removeFromFavs}
          addToFavs={this.addToFavs}
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

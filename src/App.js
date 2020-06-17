import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

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
    userInfo: [],
    currentUser: '',
    loggedIn: false
  }

  componentDidMount(){
    fetch(articleUrl)
    .then(res => res.json())
    .then(data => this.setState({articles: data}))
    fetch(userUrl)
    .then(res => res.json())
    .then(data => this.setState({userInfo: data}))
    this.fetchLatestAPIArticles()
  }

  fetchLatestAPIArticles = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      let currentArticles = [...this.state.articles]
      let apiArticles = [...data.articles]
      let filteredArticlesList = apiArticles.filter(article => !currentArticles.includes(article))
      this.setState({
        articles: filteredArticlesList
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

  addToFavs = (article) => {

    this.setState({favoriteArticles: [...this.state.favoriteArticles, article]})
  }

  removeFromFavs = (article) => {
    this.setState({favoriteArticles: this.state.favoriteArticles.filter(a => a !== article )})
  }

  loginHandler = (username,password) => {
    
    let matchingUser = this.state.userInfo.find(user => user.username === username)

    if (matchingUser.pword === password){
      this.setState({loggedIn: !this.state.loggedIn})
      this.setState({currentUser: matchingUser})
    }
  }

  render() { 
    return (  
      <div>
        <MainContainer 
          currentUser={this.state.currentUser}
          loggedIn={this.state.loggedIn}
          login={this.loginHandler}
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

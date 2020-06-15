import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

const articleUrl = 'http://localhost:3001/articles'
const userUrl = 'http://localhost:3001/users'

class App extends Component {
  state = {  
    articles: [],
    search: ''
  }

componentDidMount(){
  fetch(articleUrl)
  .then(res => res.json())
  .then( data => this.setState({articles: data}))
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
    // console.log(this.state.articles)
    return (  
      <div>
        
        <MainContainer 
        searchArticle={this.searchArticle}
        search={this.state.search}
        articles={this.returnFilteredArticles()} 
        />
      </div>
    );
  }
}
 
export default App;

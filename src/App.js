import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <Route 
            exact path="/home" 
            render={routerProps =>
              <MainContainer 
                {...routerProps}
                searchArticle={this.searchArticle}
                search={this.state.search}
                articles={this.returnFilteredArticles()}
            />}
          />
        </Router>
      </div>
    );
  }
}
 
export default App;

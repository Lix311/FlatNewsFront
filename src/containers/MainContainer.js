import React, { Component } from 'react';
import Article from '../components/Article'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
    state = {  

    }
    
    render() { 
        return (  
           <div>
                <SearchBar 
                    searchArticle={this.props.searchArticle}
                    search={this.props.search}
                />

                <NavBar />

                {this.props.articles.map(article => 
                    <Article 
                    key={article.id}
                    {...article}
                />)}
           </div> 
        );
    }
}
 
export default MainContainer;
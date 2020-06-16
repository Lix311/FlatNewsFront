import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar';
import Profile from '../components/Profile'
import ArticleContainer from './ArticleContainer';
import FavoriteContainer from './FavoriteContainer'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends Component {
    
    render() { 
        return (  
           <div>
                <SearchBar 
                    searchArticle={this.props.searchArticle}
                    search={this.props.search}
                />
                <NavBar />
                <Switch>
                    <Route 
                        exact path="/home" 
                        render={()=> 
                            <ArticleContainer 
                                articles={this.props.articles}
                            />
                        }
                    />
                    <Route 
                        exact path="/favorites" 
                        render={()=> 
                            <FavoriteContainer 
                                articles={this.props.favoriteArticles}
                            />
                        }
                    />
                    <Route 
                        exact path="/profile" 
                        render={()=> 
                            <Profile 
                                userInfo={this.props.userInfo}
                            />
                        }
                    />
                </Switch>
           </div> 
        );
    }
}
 
export default MainContainer;
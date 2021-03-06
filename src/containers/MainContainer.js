import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar';
import Profile from '../components/Profile'
import ArticleContainer from './ArticleContainer';
import FavoriteContainer from './FavoriteContainer'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login'

class MainContainer extends Component {
    
    render() { 
        return (  
           <div>
                <NavBar 
                    loggedIn={this.props.loggedIn}
                    currentUser={this.props.currentUser}
                />
                <SearchBar 
                    searchArticle={this.props.searchArticle}
                    search={this.props.search}
                />
                <Switch>
                    <Route 
                        exact path="/home" 
                        render={()=> 
                            <ArticleContainer 
                                articles={this.props.articles}
                                addToFavs={this.props.addToFavs}
                            />
                        }
                    />
                    <Route 
                        exact path="/favorites" 
                        render={()=> 
                            <FavoriteContainer 
                                articles={this.props.favoriteArticles}
                                removeFromFavs={this.props.removeFromFavs}
                            />
                        }
                    />
                    <Route 
                        exact path="/profile" 
                        render={()=> 
                            <Profile 
                            typeUrl={this.props.typeUrl}
                            changeTypeUrl={this.props.changeTypeUrl}
                            currentUser={this.props.currentUser}
                            />
                        }
                    />
                    <Route 
                    exact path="/login" 
                    render={()=> 
                        <Login
                            userInfo={this.props.userInfo}
                            login={this.props.login}
                        />
                    }
                />
                </Switch>
           </div> 
        );
    }
}
 
export default MainContainer;
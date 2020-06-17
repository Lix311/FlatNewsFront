import React from 'react'
import Article from '../components/Article'

class FavoriteContainer extends React.Component{
    render(){
        return(
            <div>
                {this.props.articles.map(article => <Article 
                key={article.title} 
                article={article}
                removeFromFavs={this.props.removeFromFavs}
            />)}
            </div>
        )
    }   
}

export default FavoriteContainer
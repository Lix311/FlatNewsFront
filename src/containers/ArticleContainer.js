import React from 'react'
import Article from '../components/Article'

const ArticleContainer = (props) =>  {
    return(
        <div>
            {props.articles.map(article => <Article 
                key={article.id} 
                article={article}
                addToFavs={props.addToFavs}
            />)}
           
        </div>
    )
}

export default ArticleContainer
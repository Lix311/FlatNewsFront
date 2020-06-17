import React from 'react';

const Article = (props) => {
    return (  
        <div className='article'>
      
            <h3>{props.article.title}</h3>
                <button onClick={() => 
                    props.addToFavs 
                    ? props.addToFavs(props.article) 
                    : props.removeFromFavs(props.article)}>{
                    props.addToFavs 
                    ? '❤️' 
                    : 'x'}
                </button>
                <h6>{props.article.author}</h6>
                <p>{props.article.description}</p>
                <p>{props.article.publishedAt}</p>
                <img 
                    className='articleImage'   
                    src={props.article.urlToImage} 
                    alt={props.article.title}
                    onClick={() => window.open(`${props.article.url}`)}
                />
        </div>
    );
}
 
export default Article;
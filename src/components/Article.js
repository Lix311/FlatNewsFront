import React from 'react';

const Article = (props) => {
    return (  
        <div className='article'>
      
            
                <div className="imgContainer">
                    <img 
                        className='articleImage'   
                        src={props.article.urlToImage} 
                        alt={props.article.title}
                        onClick={() => window.open(`${props.article.url}`)}
                        />
                    <p>{props.article.publishedAt}</p>
                </div>
                <div className="infoContainer">
                    <h2 onClick={() => window.open(`${props.article.url}`)}>{props.article.title}</h2>
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
                </div>
        </div>
    );
}
 
export default Article;
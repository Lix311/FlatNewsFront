import React from 'react';

const Article = (props) => {
    return (  
        <div className='article'>
      
            <h4>{props.article.title}  
                <button onClick={() => 
                    props.addToFavs 
                    ? props.addToFavs(props.article) 
                    : props.removeFromFavs(props.article)}>{
                    props.addToFavs 
                    ? '❤️' 
                    : 'x'}
                </button>
            </h4>
                
                
                
                
                <p>{props.article.author}</p>
                <h6>{props.article.description}</h6>
                <img className='articleImage' src={props.article.urlToImage} alt={props.article.title}/>
        </div>
    );
}
 
export default Article;
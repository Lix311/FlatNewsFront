import React from 'react';

const Article = (props) => {
    return (  
        <div className='article'>
            <h4>{props.title} <button> Favorite?</button></h4>
                <p>{props.author}</p>
                <h6>{props.description}</h6>
                <img className='articleImage' src={props.urlToImage} alt={props.title}/>
        </div>
    );
}
 
export default Article;
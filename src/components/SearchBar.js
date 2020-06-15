import React from 'react';

const SearchBar = (props) => {
    return (  
        <div>
            <h3>SearchBar</h3>
            <input 
                placeholder='Search Article' 
                type='text' 
                name='search'
                value={props.search}
                onChange={(event) => props.searchArticle(event)}
                
                
            />
        </div>
    );
}
 
export default SearchBar ;
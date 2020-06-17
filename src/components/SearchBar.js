import React from 'react';

const SearchBar = (props) => {
    return (  
        <div className="searchBar">
            <input 
                placeholder='Search for an article' 
                type='text' 
                name='search'
                value={props.search}
                onChange={(event) => props.searchArticle(event)}
            />
        </div>
    );
}
 
export default SearchBar ;
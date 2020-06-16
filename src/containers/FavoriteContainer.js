import React from 'react'
import Article from '../components/Article'

class FavoriteContainer extends React.Component{
    render(){
        return(
            <div>
                {this.props.articles}
            </div>
        )
    }   
}

export default FavoriteContainer
import React from 'react'


class Profile extends React.Component{
    
    state = {
        typeUrl: 'trending'
    }
    
    handleChange = (event) => {
        this.setState({typeUrl: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.changeTypeUrl(this.state.typeUrl)
    }
    
    render(){
        return (
            <div>
                {this.props.currentUser.username 
                ? 
                <React.Fragment>
                    <h1> Hello {this.props.currentUser.username} </h1> 
                    <p> Email {this.props.currentUser.email}</p> 
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Select Default News Category:
                            <select value={this.state.typeUrl} onChange={this.handleChange}>
                                <option value="trending">Trending</option>
                                <option value="tech">Tech</option>
                                <option value="business">Business</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="politics">Politics</option>
                                <option value="sports">Sports</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </React.Fragment>
                : null}
              
                {/* <p> Articles Read {this.props.currentUser.articles.length}</p> why undefined */}
                {/* try to get api running so that you can make settings in profile */}


                






            </div>
        
        )
    }
}


export default Profile
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() { 
        return (  
            <React.Fragment>
            <img className="logo" src="https://i.ibb.co/YhHyNDp/Logo-Makr-5g-G9-L1.png"/>
            <div className='navbar'>
                <div className='navlinks'>
                    <Link to="/home"> <h4>Home</h4> </Link>

                    {this.props.loggedIn 
                        ? <Link to="/favorites"> <h4>My Articles</h4> </Link>
                        : <Link to="/login"> <h4>My Articles</h4> </Link>
                    }

                    {this.props.loggedIn
                        ? <Link to="/profile"> <h4>My Profile</h4> </Link>
                        : <Link to="/login"><h4>My Profile</h4></Link>
                    }
                
                    {this.props.loggedIn
                    ? <h4> Welcome back, {this.props.currentUser.username} </h4>
                    : <Link to="/login"><h4>Login</h4></Link>
                    }
                    
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;
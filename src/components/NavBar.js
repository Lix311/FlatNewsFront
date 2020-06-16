import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class NavBar extends Component {
    state = {  

    }

    render() { 
        return (  
            
                <div className='navbar'>
                    <h1 className='title'>FlatNews</h1>
                    <div className='navlinks'>
                        <Link to="/home"> <h4>Home</h4> </Link>
                        <Link to="/favorites"> <h4>My Articles</h4> </Link>
                        <Link to="/profile"> <h4>My Profile</h4> </Link>
                    </div>
                    
                </div>
            
        );
    }
}
 
export default NavBar;
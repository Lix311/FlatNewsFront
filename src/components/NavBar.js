import React, { Component, Fragment } from 'react';

class NavBar extends Component {
    state = {  

    }

    render() { 
        return (  
            
                <div className='navbar'>
                    <h1 className='title'>FlatNews</h1>
                    <div className='navlinks'>
                        <h4>Home</h4>
                        <h4>My Articles</h4>
                        <h4>My Profile</h4>
                        
                    </div>
                    
                </div>
            
        );
    }
}
 
export default NavBar;
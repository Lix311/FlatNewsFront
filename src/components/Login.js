import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {  
        username: '',
        password: ''

    }

    handleInput = (event) => {
        let {name,value} = event.target
        this.setState({
            [name]:value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {username,password} = event.target
        this.props.login(username.value, password.value)
    }


    render() { 
        return (  
            <div className="loginForm">
                <h1>Log In</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor="username">Username</label>
                    <br/>
                        <input 
                            type='text' 
                            placeholder='Please enter your username' 
                            id='username' 
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInput}
                        />
                    <br/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <br/>
                        <input 
                            type='password' 
                            placeholder='Please enter your password'
                            id='password' 
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInput}
                        />
                    <br/>
                    <br/>
                    <input type='submit' value='Login' />
                    </form>
            </div>
        );
    }
}
 
export default Login;
import React, { Component } from 'react';

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
            <div>
                <h1>Logging in...</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor="username">Username</label>
                        <input 
                            type='text' 
                            placeholder='username' 
                            id='username' 
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInput}
                        />
                    <label htmlFor="password">Password</label>
                        <input 
                            type='password' 
                            placeholder='password'
                            id='password' 
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInput}
                        />
                        <input type='submit' value='login' />
                    </form>
            </div>
        );
    }
}
 
export default Login;
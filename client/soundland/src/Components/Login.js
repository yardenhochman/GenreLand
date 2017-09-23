import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import App from '../App.js';

import Header from './Header';
import Footer from './Footer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password_digest: '',
      fireRedirect: false,
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value,
    });
  }


  handleFormSubmit(event) {
      event.preventDefault();

      let data = {
        username: this.state.username,
        password_digest: this.password_digest
      }
      axios({
        method: 'POST',
        url: 'http://localhost:3001/auth/login',
        data:data
      })
      .then(res => {
        console.log('Logged in!');
        console.log(res.data, 'THIS IS THE RES');
        //When the user logs in, something will set the state in
        //App.js to be auth: true
        this.props.loggedIn();

      }).catch(err=> console.log(err));
      event.target.reset();
    } 

  render() {
    return(
      <div className="login">
        <Header />
        <div className="login-top">
          <img className="profile-icon"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"/>
          <h3>Login</h3>
        </div>

        <div className="login-form">
          <form onSubmit={(event)=> {this.handleFormSubmit(event)}}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={(event)=> {this.handleInputChange(event)}}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6" required 
              value={this.state.password_digest}
              onChange={(event)=> {this.handleInputChange(event)}}
            />
            <input
              type="submit"
              value="Submit"
            />
          </form>
          {this.state.fireRedirect
          ? <Redirect push to={`/user`} />
          : ''}
        </div>
        <Footer />
      </div>
    )
  }
}


export default Login;
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password_digest: '',
      fireRedirect: false,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
        password: this.state.password_digest
      }
      console.log(data)
      axios({
        method: 'POST',
        url: 'http://localhost:3001/auth/login',
        data: data
      })
      .then(res => {
        this.props.userDataForState(res)
        
      }).catch(err => console.log(err));
        
    } 
    


  render() {
    return(
      <div className="login">

        <div className="login-top">
          <img className="profile-icon" alt="radio"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"/>
          <h3>Login</h3>
          <Link to={`/`}>Main Page</Link>
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
          ? <Redirect push to={`/`} />
          : ''}
        </div>

      </div>
    )
  }
}


export default Login;
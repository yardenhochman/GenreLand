import React, { Component } from 'react';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password_digest: '',
      password_confirm: ''
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
    if (this.state.password_digest === this.state.password_confirm) {
      // fetch POST request to server to create new user
      // redirect to their profile? back two pages?

      let data = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password_digest: this.password_digest
      }
//routes here are not valid revist
      fetch("localhost:3001/profile",
        {method: "POST",
        body: data})
      .then(function (data) {
        return data.json();
      })
      .then(redirect("localhost:3001/")
      .catch(console.log(Err)
        )
      )

    } else {
      alert('Passwords do not match')
      // we can update the alert later to be more complex
      this.setState({
        password_digest: '',
        password_confirm: ''
      })
    }
  }

  render() {
    return(
      <div className="register">

        <div className="register-top">
          <img className="profile-icon"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"/>
          <h3>Register</h3>
        </div>

        <div className="register-form">
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6" required 
              value={this.state.password_digest}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirm"
              minLength="6" required 
              value={this.state.password_confirm}
              onChange={this.handleInputChange}
            />
            <input
              type="submit"
              value="Submit"
            />
          </form>
        </div>

      </div>
    )
  }

}

export default Registration;
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="nav">
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png" alt="logo"/>

        <div className="nav-buttons-align">
          <a href="/auth/login" className="nav-button">Login </a>
          <a href="/auth/register" className="nav-button">Register</a>
        </div>
      </div>
    )
  }
};

export default Header;
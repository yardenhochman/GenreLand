import React, { Component } from 'react';

class Header2 extends Component {
  render() {
    return(
      <div className="nav">
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png"/>

        <div className="nav-buttons-align">
            <input
            placeholder="Search"
            type="text" 
            />
            <input
            type="submit"
            value="Search"
            onSubmit={searchPlaceholder()}
            />
          <a href="/account" className="nav-button">Account</a>
          <a href="/logout" className="nav-button">Log Out</a>
        </div>
      </div>
    )
  }
};

export default Header2;
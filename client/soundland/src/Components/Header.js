import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png" alt="logo"/>

      <div className="nav-buttons-align">
      <Link to={`/`}>Main Page</Link>
        <Link to={"/auth/login"} className="nav-button">Login </Link>
        <Link to={"/auth/register"} className="nav-button">Register</Link>
      </div>
    </div>
  )
};

export default Header; //why aren't we using a Link to utilize the front end router? same goes for footer
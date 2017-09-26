import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div className="nav">
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png" alt=""/>
      <Link to={`/`}> <h4>soundland</h4> </Link>
      <div className="nav-buttons-align">
          {/* <input
          placeholder="Search"
          type="text" 
          />
          <input
          type="submit"
          value="Search"
          //onSubmit={searchPlaceholder()}
          /> */}
        <Link to="/account" className="nav-button">Account </Link>
        <Link to="/logout" className="nav-button">Log Out</Link>
      </div>
    </div>
  )
}

export default Header2;
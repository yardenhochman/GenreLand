import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import App from '../App.js';

import Header from './Header';
import Footer from './Footer';

class Success extends Component {

  componentDidMount() {
    window.location.replace('/')
  }
  
  render() {
    return(
    <div>
      <h1>Logging you in...</h1>
    </div>
    )
  }
}

export default Success;
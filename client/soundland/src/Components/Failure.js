import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import App from '../App.js';

import Header from './Header';
import Footer from './Footer';

class Failure extends Component {

  componentDidMount() {
    window.location.replace('/auth/register')
  }
  
  render() {
    return(
    <div>
      <h1>Incorrect login ...</h1>
    </div>
    )
  }
}

export default Failure;
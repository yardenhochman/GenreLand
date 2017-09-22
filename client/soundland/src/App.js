import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from     './Components/AboutUs';
import Footer from    './Components/Footer';

import Search from    './Components/Search/Search';
import Results from   './Components/Search/results';

import Login from     './Components/Auth/Login';
import Register from  './Components/Auth/Registration';
import User from      './Components/Auth/User';

//import Nav from './Nav';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
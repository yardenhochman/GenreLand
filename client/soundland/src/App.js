import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Components/Search';
import About from './Components/AboutUs';
import Results from './Components/results';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Registration';
import User from './Components/User';

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
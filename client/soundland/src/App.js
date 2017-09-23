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
import Success from './Components/Success';
import Failure from './Components/Failure';

//import Nav from './Nav';
class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false
    }
    this.loggedIn = this.loggedIn.bind(this);
    this.loginRequired = this.loginRequired.bind(this);
  }

  loggedIn = () =>{
    this.setState({auth: true})
    console.log(this.state.auth, 'this is the state of auth')
  }

  loginRequired = () =>{
    if (this.state.auth === false) {
      window.location.replace('/auth/login');
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/auth/login" component={Login} loggedIn={this.loggedIn}/>
          <Route exact path="/auth/register" component={Register} />
          <Route exact path="/user" component={User}/>
          <Route exact path="/auth/success" component={Success}/>
          <Route exact path="/auth/failure" component={Failure}/>
        </div>
      </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import About from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Header2 from './Components/Header2';

import Search from './Components/Search/Search';
import Results from './Components/Search/results';

import Login from './Components/Auth/Login';
import Register from './Components/Auth/Registration';
import User from './Components/Auth/User';

import Venues from './Components/Venues';

import EventsForm from './Components/Events/EventsForm';
import EventsEdit from './Components/Events/EventsEdit';
import EventsShow from './Components/Events/EventsShow';
import EventsList from './Components/Events/EventsList';
import Events from './Components/Events/Events';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

class App extends Component {
  state = {
    user: {},
    loggedIn: false,
  };
  loggedOut = () => {
    this.setState({
      user: {},
      loggedIn: false,
    });
  };
  PageLayout = ({ children }) => {
    const { loggedIn, user } = this.state;
    return (
      <div>
        {loggedIn ? (
          <Header2
            user={user}
            loggedOut={this.loggedOut}
          />
        ) : (
          <Header user={user} />
        )}
        {children}
      </div>
    );
  };
  userDataForState = res => {
    this.setState({
      user: res.data.user,
      loggedIn: true,
    });
  };
  render = () => (
      <Router>
        <div className="App">
          <Route
            path="/"
            component={this.PageLayout}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Search user={this.state.user} />
            )}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/auth/login"
            render={props => (
              <Login
                userDataForState={
                  this.userDataForState
                }
              />
            )}
          />

          <Route
            exact
            path="/auth/register"
            render={props => (
              <Register
                userDataForState={
                  this.userDataForState
                }
              />
            )}
          />
          <Route
            exact
            path="/profile/:id"
            render={props => (
              <User user={this.state.user} />
            )}
          />

          <Route path="/Events" />
          <Route
            exact
            path="/events"
            component={Events}
          />
          <Route
            exact
            path="/events/form"
            render={props => (
              <EventsForm
                user={this.state.user}
                loggedIn={this.state.loggedIn}
                userDataForState={
                  this.userDataForState
                }
              />
            )}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <EventsEdit
                userDataForState={
                  this.userDataForState
                }
              />
            )}
          />
          <Route
            path="/show/:id"
            component={EventsShow}
          />
          <Route
            path="/list"
            render={props => (
              <EventsList
                user={this.state.user}
              />
            )}
          />
          <Route path="*" render={Footer} />
        </div>
      </Router>
    );
}

export default App;

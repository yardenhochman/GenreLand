import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: false,
      music: false,
    }
  }
    updateLocation() {
      this.setState({
        location: true,
        location: location,
      })
    }


  render() {
    return (
      <div>
        <h1>You live in {this.state.location.city}, {this.state.location.state}</h1>
        <Band name={'Favorite Band'} updateTotal={this.updateTotal} />
        <Location name={'Where you live'} updateTotal={this.updateTotal} />
      </div>
    );
  }
}

export default App;

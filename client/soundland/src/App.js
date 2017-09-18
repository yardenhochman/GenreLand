import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      music: null,
    }
    this.updateLocation = this.updateLocation.bind(this)
    this.updateMusic = this.updateMusic.bind(this)

  }
    updateLocation() {
      this.setState({
        location: location
      });
    }
    updateMusic() {
      this.setState({
        music: music
      });
    }

  render() {
    return (
      <div>
        <h1>You live in {this.state.location.city}, {this.state.location.state}</h1>
        <Music name={'Favorite Band'} updateLocation={this.updateLocation} />
        <Location name={'Where do you live'} updateMusic={this.updateMusic} />
      </div>
    );
  }
}

export default App;

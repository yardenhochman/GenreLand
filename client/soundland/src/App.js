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
    updateLocation(location) {
      this.setState({
        location: location
      });
    }
    updateMusic(music) {
      this.setState({
        music: music
      });
    }
    onSubmit() {
      /* 
      if state.location and state.music are both not Null, 
      send objects saved in state into the router. 
      The router will store the location and music in the database in case they do not exist yet,
      and save their link in a shared table. Once this process is done, it will direct the user into
      a map or list, that will inform the user where in the area he can find 
      places to listen to the music he loves.
       */
    }

  render() {
    return (
      <div>
        <h1>You live in {this.state.location.city}, {this.state.location.state}</h1>
        <Music name={'Favorite Musical Artist'} updateLocation={this.updateLocation} />
        <Location name={'Where do you live'} updateMusic={this.updateMusic} />
        <button onClick = {this.onSubmit} >Submit</button>
      </div>
    );
  }
}

export default App;

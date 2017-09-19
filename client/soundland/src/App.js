import React, { Component } from 'react';
import './App.css';
import GenreDown from './Components/GenreSelect'
import Location from './Components/Location'

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      music: null,
    }
    this.updateLocation = this.updateLocation.bind(this)
    this.updateMusic = this.updateMusic.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

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
      if (this.state.location === null || this.state.music === null) {
        return
      }
      let body = {};
      body.location = this.state.location;
      body.music = this.state.music;
      fetch("localhost:3000", {
        method: "POST",
        body: body
      });
    }
      /* 
      if state.location and state.music are both not Null, 
      send objects saved in state into the router. 
      The router will store the location and music in the database in case they do not exist yet,
      and save their link in a shared table. Once this process is done, it will direct the user into
      a map or list, that will inform the user where in the area he can find 
      places to listen to the music he loves.
       */
    

  render() {
    return (
      <div>
        {/* <h1>You live in {this.state.location ? this.state.location.city : ''}, {this.state.location.state}</h1> */}
        <GenreDown name={'Favorite Musical Artist'} updateMusic={this.updateMusic} />
        <Location name={'Where do you live'} updateLocation={this.updateLocation} />
        <button onClick = {this.onSubmit} >Submit</button>
      </div>
    );
  }
}

export default App;
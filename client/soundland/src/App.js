import React, { Component } from 'react';
import './App.css';
import Genreland from './Components/Genreland'
import Location from './Components/Location'
import Results from './Components/results'
import axios from 'axios';
import Footer from './Components/Footer';
//import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      music: "0",
      waiting: false,
      results: null
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
      if (this.state.location === null || this.state.music === "0")
        return
      this.setState({waiting: true})
      let data = {
        zipcode: this.state.location,
        genre: Number(this.state.music),
        description: ' '
      };

    axios({
      method: 'POST',
      url: 'http://localhost:3001/results',
      data
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        results:res.data,
        waiting: false
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        {/* <h1>You live in {this.state.location ? this.state.location.city : ''}, {this.state.location.state}</h1> */}
        <Genreland name={'Favorite Musical Artist'} updateMusic={this.updateMusic} />
        <Location name={'Where do you live'} updateLocation={this.updateLocation} />
        <button onClick={this.onSubmit} >Submit</button>
        <Results results={this.state.results} waiting={this.state.waiting} />
      </div>
    );
  }
}

export default App;
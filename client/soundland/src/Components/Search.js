import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Genreland from './Genreland';
import Location from './Location';
import Results from './results';
import Footer from './Footer';

class Search extends Component {
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
        <Header />
        <div>
          {/* <h1>You live in {this.state.location ? this.state.location.city : ''}, {this.state.location.state}</h1> */}
          <Genreland name={'Favorite Musical Artist'} updateMusic={this.updateMusic} />
          <Location name={'Where do you live'} updateLocation={this.updateLocation} />
          <button onClick={this.onSubmit} >Submit</button>
          <Results results={this.state.results} waiting={this.state.waiting} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Genreland from './Genreland';
import Location from './Location';
import Results from './results';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      location:                       '',
      music:                          "0",
      waiting:                        false,
      results:                        null
    }
  this.onSubmit =                     this.onSubmit.bind(this)
  this.handleGenreChoice =            this.handleGenreChoice.bind(this)
  this.handleZipcodeInput =           this.handleZipcodeInput.bind(this)
  }

  handleZipcodeInput(event) {
    event.preventDefault();
    let input = Number(event.target.value);
    if (isNaN(input))
      return
      this.setState({location: input});
  }
  handleGenreChoice(event) {
    event.preventDefault();
    this.setState({music: event.target.value});
  }
  onSubmit() {
    if (this.state.location === null || this.state.music === "0")
      return
    this.setState({waiting: true})
    let data = {
      zipcode:                        this.state.location,
      genre:                          Number(this.state.music),
      description:                    ' '
    };
    axios({
      method:                         'POST',
      url:                            'http://localhost:3001/results',
      data
    }).then( res => {
        console.log(res.data);
        this.setState({
          results:                    res.data,
          waiting:                    false
        })
      }).catch( err => console.log(err))
  }
  render() {
    return (
      <div>
        {/* <h1>You live in {this.state.location ? this.state.location.city : ''}, {this.state.location.state}</h1> */}
        <Genreland 
          name =                  {'Favorite Musical Artist'} 
          handleGenreChoice =     {this.handleGenreChoice} 
          selectedMusic =         {this.state.music}
          />
        <Location 
          name =                  {'Where do you live'} 
          handleZipcodeInput =    {this.handleZipcodeInput}
          setLocation =           {this.state.location}
        />
        <button 
          onClick =               {this.onSubmit}>
          Submit
        </button>
        <Results 
          state =                 {this.state}
        />
      </div>
    );
  }
}

export default Search;
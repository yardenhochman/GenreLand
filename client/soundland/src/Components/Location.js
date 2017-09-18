import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
      searchTerm: ''
    }
  }
  handleChange(event) {
    event.preventDefault();
    let input = event.target.value;
    this.setState({searchTerm: input})
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchTerm =! '')
        this.getLocation()
  }
  getLocation() {
    fetch(``/* location api and key */)
    .then ( response => response.json())
    .then ( (jsonRes) => {
        let locationData = {
            /* place relevent data into object */
        }
        this.props.updateLocation(locationData);
    }).catch( error => console.log(error))
  }

  render() {
    <div className='Where do you live?'>
        <h2>{this.props.name}</h2>
        <input type="text" onChange = {this.handleChange} value = {this.state.searchTerm}></input>
        <button onClick = {this.handleSubmit} >Submit</button>
        <button onClick = {this.automatic} >Use your current location</button>
      </div>
  }

}
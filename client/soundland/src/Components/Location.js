import React, { Component } from 'react';
import './.env';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: ''
    }
  }
  handleChange(event) {
    event.preventDefault();
    let input = event.target.value;
    this.setState({zipcode: input})
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.zipcode =! '')
        this.getLocation()
  }
  getLocation() { //take zipcode, return city
    fetch(` https://www.zipcodeapi.com/rest/${API_KEY}/info.json/${this.state.zipcode}/degrees`)
    .then ( response => response.json())
    .then ( (jsonRes) => {
        let locationData = {
            zipcode: this.state.zipcode,
            city: jsonRes.city
        }
        this.props.updateLocation(locationData);
    }).catch( error => console.log(error))
  }

  render() {
    <div className='Please enter your zipcode?'>
      <h2>{this.props.name}</h2>
      <input type="text" onChange = {this.handleChange} value = {this.state.searchTerm}></input>
      <button onClick = {this.handleSubmit} >Submit</button>
      <button onClick = {this.automatic} >Use your current location</button>
    </div>
  }

}
export default Location;

/*
returns a list of close zip codes. see ending 
https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/radius.json/32131/5/km
returns information for zipcode
 https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/info.json/11233/degrees 

*/
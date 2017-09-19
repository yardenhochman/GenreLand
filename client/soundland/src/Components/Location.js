import React, { Component } from 'react';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: '',
      coords: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.automatic = this.automatic.bind(this)
    this.success = this.success.bind(this)
  }
  handleChange(event) {
    event.preventDefault();
    let input = Number(event.target.value);
    this.setState({zipcode: input})
  }
  success (position) {
    let coords = position.coords
    this.setState({coords:position.cords})
    console.log(this.state.coords)
  }
  automatic() { 
    //this function returns a variable which we will refer to as "position" for convenience. see success
    if (!navigator.geolocation)
      return
    const error = (err) => {console.log(err)}
    const options = () => {enableHighAccuracy: true}
    navigator.geolocation.getCurrentPosition(this.success, error, options);
    //the get currentposition function needs predefined success, error, options functions. see above functions
  }

  render() {
    return (
    <div className='Please enter your zipcode?'>
      <h2>{this.props.name}</h2>
      <input type="number" onChange = {this.handleChange} value = {this.state.zipcode}></input>
      <button onClick = {this.submit} >submit</button>
      <button onClick = {this.automatic} >Use your current location</button>
    </div>
    )
  }

}
export default Location;

/*
returns a list of close zip codes. see ending 
https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/radius.json/32131/5/km
returns information for zipcode
 https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/info.json/11233/degrees 

*/
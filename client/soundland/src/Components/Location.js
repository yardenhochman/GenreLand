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
    let zipcode = this.state.zipcodel
    fetch(` https://www.zipcodeapi.com/rest/${zipcodeapi_API_KEY}/info.json/${zipcode}/degrees`)
    .then ( response => response.json())
    .then ( (jsonRes) => {
        let locationData = {
            zipcode: this.state.zipcode,
            city: jsonRes.city
        }
        this.props.updateLocation(locationData);
    }).catch( error => console.log(error))
  }

  success(position) {
    let cords;
    cords.latitude = position.coords.latitude;
    cords.longitude = position.coords.longitude;
    this.findZip(cords)
  }
  error(err) {
    console.log(err)
  }
  options() {
    enableHighAccuracy: true
  }
  
  automatic() { 
    //this function returns a variable which we will refer to as "position" for convenience. see success
    if (!navigator.geolocation)
      return
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    //the get currentposition function needs predefined success, error, options functions. see above functions
  }

  findZip(cords) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${cords.latitude},${cords.longitude}&key=${GOOGLE_API_KEY}`)
    .then ( response => response.json() )
    .then ( (jsonRes) => {
      let result;
      result.city = jsonRes[0].address_components[2].long_name;
      result.zipcode = jsonRes[0].address_components[7].long_name;
    
    this.setState({
      zipcode: result.zipcode
    })
    let locationData = {
      zipcode: this.state.zipcode,
      city: jsonRes.city
    }
    this.props.updateLocation(locationData);
  })
}

  render() {
    return (
    <div className='Please enter your zipcode?'>
      <h2>{this.props.name}</h2>
      <input type="text" onChange = {this.handleChange} value = {this.state.zipcode}></input>
      <button onClick = {this.handleSubmit} >Submit</button>
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
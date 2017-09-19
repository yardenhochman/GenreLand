import React, { Component } from 'react';
//import './.env';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  handleChange(event) {
    event.preventDefault();
    let input = Number(event.target.value);
    this.setState({zipcode: input}) 
     }
    
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.zipcode !== '')
        this.getLocation()
        
  }
  getLocation() { //take zipcode, return city
    fetch(`https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/radius.json/${this.state.zipcode}/1/mi`) 
    .then ( res => {
      console.log(res)
      res.json()
    })
    .then ( (jsonRes) => {
        let locationData = { 
            zip: this.state.zip,
            city: jsonRes.city
        } 
        this.props.updateLocation(locationData);
    }).catch( error => console.log(error))
  }
 
  render() {
    return(
    <div className='Please enter your zipcode?'>
      <h2>{this.props.name}</h2>
      <input type="number" onChange = {this.handleChange} value = {this.state.searchTerm}></input>
      <button onClick = {this.handleSubmit} >Submit</button>
      <button onClick = {this.automatic} >Use your current location</button>
    </div>
    );
  }
}
export default Location;

/*
orig
https://www.zipcodeapi.com/rest/${API_KEY}/info.json/${this.state.zipcode}/degrees
returns a list of close zip codes. see ending 
https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/radius.json/32131/5/km
returns information for zipcode
 https://www.zipcodeapi.com/rest/uhIXlyIX5ti6rQzIFn2CksKeouBVtG8XYQVkpDhu7AByqah6ykISMs6aWI6qoenn/info.json/11233/degrees 

*/
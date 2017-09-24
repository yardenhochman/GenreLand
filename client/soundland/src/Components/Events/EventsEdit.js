import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header2';
import Footer from '../Footer';
import axios from 'axios';

class EventsEdit extends Component {
    constructor() {
        super();
          this.state = {
              title: '',
              address: '',
              date: '',
              time: '',
              genre: '',
              description: '',
              fireRedirect: false,
            };
          this.eventFormChange = this.eventFormChange.bind(this);
          this.eventFormSubmit = this.eventFormSubmit.bind(this);
        }

  componentDidMount() {
    axios.get(`/events/${this.props.match.params.id}`)
        .then(res => {
            const eventData = res.data.data;
            this.setState({ 
                title: eventData.title,
                address: eventData.address, //onclick to cancel venue
                date: eventData.date,
                time: eventData.time, 
                genre: eventData.genre,
                description: eventData.description,
              })
            }).catch(err => console.log('error in event edit mount'));
           }

  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  eventFormSubmit(event){
    event.preventDefault();
  axios
    .put(`http://localhost:3001/event/${this.props.match.params.id}`, {
        title: this.state.title,
        address: this.state.address,
        date: this.state.date, //date and time separate
        time: this.state.time,
        genre: this.state.genre,
        description: this.state.description,
      })
      .then(res => {
          console.log(res);
          this.setState({
              newId: res.data.data.id,
              fireRedirect: true,
          });
        })
      .catch(err => console.log(err));
      event.target.reset();
    }

   render(){
         return (
          <div>
           <Header />  
           <div className="eventEdit">
            <form onSubmit={this.eventFormSubmit}>
             <label>
                 Event Title:
                <input 
                 type="text"
                 placeholder="title"
                 name="title"
                 required
                 value={this.state.title}
                 onChange={this.eventFormChange}
                 />
            </label>
            <label>
                 Event Address:
                 <input 
                 type="text"
                 placeholder="Address"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={this.eventFormChange}
                 />
            </label>
            <label>
                Zip Code:
                <input 
                type="number"
                placeholder="zip code"
                name="zip code"
                pattern="[0-9]{5}"
                required
                //value={this.state.zip_code}
                onChange={this.eventFormChange}
                />
            </label><br/>
            <label>
                Event Date:
                <input 
                type="date"
                placeholder="date"
                name="date"
                required
                value={this.state.date}
                onChange={this.eventFormChange}
                />
                Event Start Time:
                <input type="time"
                placeholder="time"
                pattern="[0-9]{2}:[0-9]{2}"
                required
                value={this.state.time}
                onChange={this.eventFormChange}
                />
            </label>
            <label>
                Genre Type:
                <input 
                type="text"
                placeholder="genre"
                name="genre"
                value={this.state.genre}
                onChange={this.eventFormChange}
                />
            </label>
            <label>
                Event Description:
                <input 
                type="text"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={this.eventFormChange}
                />
            </label>
            <input type="submit" value="Submit!"/>
            </form>
            {this.state.fireRedirect
             ? <Redirect push to={`/EventsList/${this.state.newId}`} />
             : ''}
          </div>  
          <Footer />
        </div> 
         );
        }
      }

export default EventsEdit;
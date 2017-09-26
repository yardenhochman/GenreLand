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
              event_date: '',
              event_time: '',
              genre: '',
              description: '',
              zip_code: '',
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
                event_date: eventData.event_date,
                event_time: eventData.event_time, 
                genre: eventData.genre,
                description: eventData.description,
                zip_code: eventData.zip_code,
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
        event_date: this.state.event_date, //date and time separate
        event_time: this.state.event_time,
        genre: this.state.genre,
        description: this.state.description,
        zip_code: this.state.zip_code,
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
           <form onSubmit={(event)=> {this.eventFormSubmit(event)}}>
             <label>
                 Event Title:
                <input 
                 type="text"
                 placeholder="title"
                 name="title"
                 required
                 value={this.state.title}
                 onChange={(event)=> {this.eventFormChange(event)}}
                 />
            </label><br/>
            <label>
                 Event Address:
                 <input 
                 type="text"
                 placeholder="Address"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={(event)=> {this.eventFormChange(event)}}
                 />
            </label><br/>
            <label>
                Zip Code:
                <input 
                type="number"
                placeholder="zip code"
                name="zip_code"
                pattern="[0-9]{5}"
                required
                value={this.state.zip_code}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Event Date:
                <input 
                type="date"
                name="event_date"
                required
                value={this.state.event_date}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
                Event Start Time:
                <input type="time"
                name="event_time"
                pattern="[0-9]{2}:[0-9]{2}"
                required
                value={this.state.event_time}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Genre Type:
                <input 
                type="text"
                placeholder="Genre"
                name="genre"
                value={this.state.genre}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Event Description:
                <input 
                type="text"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <input type="submit" value="Submit!"/>
            </form>
            {this.state.fireRedirect
             ? <Redirect push to={`/EventsShow/${this.state.newId}`} />
             : ''}
          </div>  
          <Footer />
        </div> 
         );
        }
      }

export default EventsEdit;
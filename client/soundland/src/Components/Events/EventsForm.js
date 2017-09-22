import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header2';
import Footer from '../Footer';
import axios from 'axios';

class EventsForm extends Component {
    constructor() {
      super();
        this.state = {
            title: '',
            address: '',
            event_date: '',
            event_time: '',
            genre: '',
            description: '',
            fireRedirect: false,
          };
        this.eventFormChange = this.eventFormChange.bind(this);
        this.eventFormSubmit = this.eventFormSubmit.bind(this);
      }

      eventFormChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value,
        });
      }

      eventFormSubmit(event){
          event.preventDefault();
        axios
          .post('http://localhost:3001/event', {
              title: this.state.title,
              address: this.state.address,
              event_date: this.state.date, //date and time separate
              event_time: this.state.time,
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
            .catch(err => console.log('error in eventsform'));
            event.target.reset();
          }
        render(){
         return (
           
          <div>
            <Header />  
           <div className="eventsAdd">
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
            </label><br/>
            <label>
                 Event Address:
                 <input 
                 type="text"
                 placeholder="Place of Venue"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={this.eventFormChange}
                 />
            </label><br/>
            <label>
                Date:
                <input 
                type="date"
                name="date"
                min="2017-09-21" 
                max="2050-01-01"
                required
                //value={this.state.event_date}
                onChange={this.eventFormChange}
                />
            </label><br/>
            <label>
                Start Time:
                <input type="time"
                name="time" 
                //pattern="[0-9]{2}:[0-9]{2}" //https://stackoverflow.com/questions/19670943/html-regex-pattern-first-digit-1-9-second-digit-0-9
                required
                //value={this.state.event_time}
                onChange={this.eventFormChange}
                />
            </label><br/>
            <label>
                Genre Type:
                <input 
                type="text"
                placeholder="genre"
                name="genre"
                value={this.state.genre}
                onChange={this.eventFormChange}
                />
            </label><br/>
            <label>
                Description of Event:
                <input 
                type="text"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={this.eventFormChange}
                />
            </label><br/>
            <input type="submit" value="Submit!"/>
            </form>
            {this.state.fireRedirect
             ? <Redirect push to={`/eventsadd/${this.state.newId}`} />
             : ''}
             <Link to={`/EventsList/`}>Back to Event List</Link>
             </div>
             <Footer /> 
          </div>  
         );
        }
      }


export default EventsForm;
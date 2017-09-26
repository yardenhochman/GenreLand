import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class EventsAdd extends Component {
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
      componentDidMount(){
        console.log(this.state)
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

          let data = {
              title: this.state.title,
              address: this.state.address,
              zip_code: this.state.zip_code, //user zipcode insert here
              event_date: this.state.date,
              event_time: this.state.time,
              genre: this.state.genre,
              description: this.state.description,
              createdby: this.props.user.id||"annonymous"
          }
          console.log(data);
          axios({
              method: 'POST',
              url: `http://localhost:3001/event`,
              data: data
            })
            .then(res => {
                console.log(res);
                this.setState({
                    newId: res.data.id,
                    fireRedirect: true,
                });
              })
            .catch(err => console.log('error in eventsform'));
            event.target.reset();
          }
        render(){
         return (
           
          <div>
           <div className="eventsAdd">
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
                 placeholder="Place of Venue"
                 name="address"
                 required
                 value={this.state.address}
                 onChange={(event)=> {this.eventFormChange(event)}}
                 />
            </label><br/>
            <label>
                Zip Code:
                <input 
                type="text"
                placeholder="zip code"
                name="zip code"
                pattern="[0-9]{5}"
                required
                //value={this.state.zip_code}
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
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Start Time:
                <input type="time"
                name="time" 
                //pattern="[0-9]{2}:[0-9]{2}" //https://stackoverflow.com/questions/19670943/html-regex-pattern-first-digit-1-9-second-digit-0-9
                required
                //value={this.state.event_time}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Genre Type:
                <input 
                type="text"
                placeholder="genre"
                name="genre"
                value={this.state.genre}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <label>
                Description of Event:
                <input 
                type="text"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={(event)=> {this.eventFormChange(event)}}
                />
            </label><br/>
            <input type="submit" value="Submit!"/>
            </form>
            {this.state.fireRedirect
             ? <Redirect push to={`/eventsadd/${this.state.newId}`} />
             : ''}
             <Link to={`/EventsList/`}>Back to Event List</Link>
             </div>
          </div>  
         );
        }
      }

export default EventsAdd;
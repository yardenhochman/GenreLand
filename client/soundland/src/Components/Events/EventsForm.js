import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header2';
import Footer from '../Footer';
import axios from 'axios';

class EventsForm extends Component {
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
          .post('/event', {
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
           <div className="eventAdd">
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
             ? <Redirect push to={`/eventsadd/${this.state.newId}`} />
             : ''}
             </div>
             <Footer /> 
          </div>  
         );
        }
      }


export default EventsForm;
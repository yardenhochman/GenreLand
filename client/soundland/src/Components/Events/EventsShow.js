import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import Header from './Header2';
//import Footer from './Footer';
import axios from 'axios';

class EventsShow extends Component {
    constructor() {
      super();
        this.state = {
            event: null,
            eventApiDataLoaded: false,
            fireRedirect: false,
          };
        this.deleteEvent = this.deleteEvent.bind(this);
      }

      componentDidMount() {
          axios.get(`/event/${this.props.match.params.id}`)
          .then(res => {
              this.setState({
                eventApiDataLoaded: true,
                event: res.data.data,
                })
              }).catch(err => console.log('error in events show mount'));
            }

      deleteEvent(){
          axios.delete(`/event/${this.props.match.params.id}`)
              .then(res => {
                  console.log(res);
                  this.setState({
                    fireRedirect: true,  
                  });
              }).catch(err => {
                  console.log('error in delete event');
              });
            }

        renderEventOrLoad(){
            if(this.state.eventApiDataLoaded) {
         return (
             <div className="eventinside">
            <h1>{this.state.eventData.title}</h1>
            <h3>{this.state.eventData.address}</h3>
            <p>{this.state.eventData.description} </p>
            <Link to={`/edit/${this.props.match.params.id}`}>Edit Event
            </Link>
            <span className="delete" onClick={this.deleteEvent}>Delete Event</span>
            {this.state.fireRedirect
                ? <Redirect push to="/general-event" />
                : ''}
            </div>
            )
           } else return <p className="eventloading">Loading Events</p>
        }

        render(){
            return (
                <div className="eventshow"> {this.renderEventOrLoad()}</div>
            )
          }
        }

        export default EventsShow;
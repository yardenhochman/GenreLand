import React, { Component } from 'react';
import Header from './header2';
import Footer from './Footer';
import axios from 'axios';

class EventsList extends Component {
    constructor(){
        super();
        this.state= {
            eventApiDataLoaded: false,
            eventApiData: null
        }
      }

      compnentDidMount(){
          axios.get('/event')
          .then(res => {
           this.setState({
               eventApiDataLoaded: true,
               eventApiData: res.data.data,
           })    
        })
      }

      renderEvents(){ //return twice because use of .map
          if(this.state.eventApiDataLoaded){
              return this.state.eventApiData.map( event => {
                return (
                    <Events key={event.id} event={event} />
                );
              });
          } else return <p>Loading Events</p>
        }
      
        render(){
            return(
                <header />
                <div ClassName="eventsList">
                    {this.renderEvents()}
                </div>
                <footer />    
            )
          }
        }



    export default EventsList;
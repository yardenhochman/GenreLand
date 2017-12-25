import React, { Component } from 'react';
import Header from '../Header2';
import Footer from '../Footer';
import Events from './Events';
import axios from 'axios';

/* const SERVER = `http://localhost:3001`;
 */ const SERVER = ``;

class EventsList extends Component {
  state = {
    eventApiDataLoaded: false,
    eventApiData: null,
  };

  componentDidMount = () => {
    console.log('fetching');
    axios.get(`${SERVER}/event/`).then(res => {
      this.setState({
        eventApiData: res.data.data,
        eventApiDataLoaded: true,
      });
    });
  }

  renderEvents = data => {
    //return twice because use of .map
    return data.map(aEvent => {
      return (
        <Events key={aEvent.id} event={aEvent} />
      );
    });
    this.setState({
      eventApiDataLoaded: false,
    });
  }

  render = () => {
    return (
      <div ClassName="eventsList">
        {this.state.eventApiDataLoaded
          ? this.renderEvents(
              this.state.eventApiData,
            )
          : ' '}
      </div>
    );
  }
}

export default EventsList;

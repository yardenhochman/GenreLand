import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Venues extends Component {
    render(){
        return(
            <Link to={`/Events/EventsForm`}>Post an Event!
            </Link>
        )
    }
}

export default Venues;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venues extends Component {
    render(){
        return(
        <div>
            <Link to={`/EventsForm`}>Post an Event! 
            </Link>
            <Link to={`/`}>Back to Main 
            </Link>
        </div>
        )
    }
}

export default Venues;
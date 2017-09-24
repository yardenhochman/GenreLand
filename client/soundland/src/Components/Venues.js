import React from 'react';
import { Link } from 'react-router-dom';

const Venues = () => {
    return (
        <div>
            <Link to={`/EventsForm`}>Post an Event! </Link><br/>
            <Link to={`/`}>Back to Main </Link>
        </div>        
    )
}

export default Venues;
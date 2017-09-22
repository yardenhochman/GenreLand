import React from 'react';
//connecting to react routes
import { Link } from 'react-router-dom';

const Events = (props) => {
    return (
        <div className="eventshowlist">
            <h1>{props.eventData.title}</h1>
            <h3>{props.eventData.address}</h3>
            <p>{props.eventData.description}</p>
            <Link to={`/EventsList/${props.event.id}`}>More Info
            </Link>
        </div>
        )
       }

export default Events;
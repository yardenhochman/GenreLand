import React from 'react';
//connecting to react routes
import { Link } from 'react-router-dom';

const Events = (props) => {
    return (
        <div className="eventshowlist">
            <h4>{props.eventData.title}</h4>
            <h5>{props.eventData.address}</h5>
            <p>{props.eventData.date}</p>
            <Link to={`/EventsList/${props.event.id}`}>More Info
            </Link>
        </div>
        )
       }

export default Events;
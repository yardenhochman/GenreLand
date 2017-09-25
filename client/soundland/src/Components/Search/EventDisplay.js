import React from 'react';

const EventDisplay = (props) => {
  const { areaName, events, userLocation} = props
  
  return (
      <div className="EventResults">
        <h1 className={userLocation?"markzipcode":''}>{areaName}</h1>
        <ul>
          {events.map( (event,index) => {
            let eventName = Object.getOwnPropertyNames(event);
            return (
              <li className={"list-group-item " + !(userLocation)?"markGenre":''} key = {String(event)+String(index)}>
                {String(event)+' ' + 5+{/* event.count */}}
              </li>
            )
          })}
        </ul>
        
      </div>
  )
}

export default EventDisplay;
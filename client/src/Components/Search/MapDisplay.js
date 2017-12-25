import React from 'react';

const MapDisplay = (props) => {
  const { mainLocation } = props
  console.log (`MapDisplay Component:`+mainLocation)
  return (
    <div>map will be here</div>
  )
}


export default MapDisplay;
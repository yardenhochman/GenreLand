import React from 'react';

const AreaDisplay = (props) => {
  return (
    <div>
      <h1>
        {props.areaName}
      </h1>
      <ul>
        {props.genresList.map( (genre,index) => {
          return (
            <li className="list-group-item" key={String(genre) + String(' number ' + index)}>
              <p>{genre+' '+props.genreOccurences[index]}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AreaDisplay;
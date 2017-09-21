import React, { Component } from 'react';

const AreaDisplay = props => {
  return (
    <div key={props.key}>
      <h1>
        {props.areaName}
      </h1>
      <ul>
        {props.genreList.map( (genre,index) => {
          return (
            <li className="list-group-item" key={String(genre) + String(' number ' + index)}>
              <h2>{genre}</h2>
              <p>{props.genreOccurences[index]}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AreaDisplay;
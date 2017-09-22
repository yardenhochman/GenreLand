import React, { Component } from 'react';
import AreaDisplay from './AreaDisplay';
import MapDisplay from './MapDisplay';
import { Link } from 'react-router-dom';

class Results extends Component {



  displayAreasMap(results, usersChoices) {
    console.log(usersChoices.location)
    return (
      <MapDisplay 
        location =        {usersChoices.location}
      />
    )
  }
  displayAreas(results, usersChoices) {
    console.log(usersChoices)
    let zipcodes = Object.getOwnPropertyNames(results);
    return zipcodes.map( (zipcode,index) => {
      const key = String(zipcode) + String(' number ' + index)
      const unsortedGenres = Object.getOwnPropertyNames(results[zipcode])
      const occurrenceValue = (a,b) => results[zipcode][b]-results[zipcode][a]
      const genres = unsortedGenres.sort(occurrenceValue)
      const genreOccurences = genres.map( genre => results[zipcode][genre] )
      return (
          <AreaDisplay 
            key =             {key} 
            areaName =        {zipcode} 
            genreOccurences = {genreOccurences} 
            genresList =      {genres}
            selectedGenre =   {Number(usersChoices.music)}
            usersLocation =   {String(usersChoices.location)===zipcode?true:false}
          />
      )
    })
  }
  eventsView() {
    console.log(`Coming Soon!`)
    return //this will link the user to events component. That's also where the user can see local bars
  }
  sort(data) {
    let results = {};
    data.map( number => {
      if (!results[number.zipcode])
        return results[number.zipcode] = {[number.genre]: 1};
      else if (!results[number.zipcode][number.genre])
        return results[number.zipcode][number.genre] = 1;
      else
        return results[number.zipcode][number.genre]++;
    })
    return results;
  }
  resultsParser(results, usersChoices) {
    if (results.message !== 'ok')
      return <div>Try a different zipcode.</div>
    results = this.sort(results.data)
    return (
      <div>
        <Link to={`/Venues/`}>Local Scene</Link>
        {/* <button onClick={this.eventsView}>Local Scene</button> */}
        {this.displayAreas(results, usersChoices)}
        {this.displayAreasMap(results, usersChoices)}
      </div>
    )
  }
  renderLoading() {
    console.log('rendering loading message')
    return <h2>Searching your area</h2>
  }
  checkResults() {
    const { location, music, waiting, results} = this.props.state
    let usersChoices = {};
    usersChoices = {location, music}
    if (!results && !waiting)
      return ('')
    if (waiting) 
      return this.renderLoading()
    return this.resultsParser(results, usersChoices)
  }
  render() {
    return (
      <div>
        {this.checkResults()}
      </div>
    )
  }
}


export default Results;
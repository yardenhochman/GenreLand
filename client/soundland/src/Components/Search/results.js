import React, { Component } from 'react';
import AreaDisplay from './AreaDisplay';
import MapDisplay from './MapDisplay';
import { Link } from 'react-router-dom';

class Results extends Component {



  displayAreasMap(results, mainLocation) {
    console.log(mainLocation)
    return (
      <MapDisplay 
        mainLocation =        {mainLocation}
      />
    )
  }
  displayAreas(results, mainLocation) {
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
            mainLocation =    {mainLocation}
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
        results[number.zipcode] = {[number.genre]: 1};
      else if (!results[number.zipcode][number.genre])
        results[number.zipcode][number.genre] = 1;
      else
        results[number.zipcode][number.genre]++;
    })
    return results;
  }
  resultsParser(results, mainLocation) {
    if (results.message !== 'ok')
      return <div>Try a different zipcode.</div>
    results = this.sort(results.data)
    return (
      <div>
        <Link to={`/Venues/`}>Local Scene</Link>
        {/* <button onClick={this.eventsView}>Local Scene</button> */}
        {this.displayAreas(results, mainLocation)}
        {this.displayAreasMap(results, mainLocation)}
      </div>
    )
  }
  renderLoading() {
    console.log('rendering loading message')
    return <h2>Searching your area</h2>
  }
  checkResults() {
    const { results, waiting, mainLocation } = this.props
    if (!results && !waiting)
      return ('')
    if (waiting) 
      return this.renderLoading()
    return this.resultsParser(results, mainLocation)
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
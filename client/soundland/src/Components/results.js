import React, { Component } from 'react';
import AreaDisplay from './AreaDisplay'
class Results extends Component {
  constructor() {
    super();
    this.state = {
      eventClicked: false,
    }
  }
  displayAreas(results) {
    let zipcodes = Object.getOwnPropertyNames(results);
    return zipcodes.map( (zipcode,index) => {
      const key = String(zipcode) + String(' number ' + index)
      const unsortedGenres = Object.getOwnPropertyNames(results[zipcode])
      const occurrenceValue = (a,b) => results[zipcode][b]-results[zipcode][a]
      const genres = unsortedGenres.sort(occurrenceValue)
      const genreOccurences = genres.map( genre => results[zipcode][genre])
      return (
        <AreaDisplay 
        key={key} areaName={zipcode} 
        genreOccurences={genreOccurences} genresList={genres}
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
    data.map( (number) => {
      if (!results[number.zipcode])
        results[number.zipcode] = {[number.genre]: 1};
      else if (!results[number.zipcode][number.genre])
        results[number.zipcode][number.genre] = 1;
      else
        results[number.zipcode][number.genre]++;
      })
      return results;
  }
  resultsParser(results) {
    if (results.message !== 'ok')
      return (
        <div>
          Try a different zipcode.
        </div>
      )
    results = this.sort(results.data)
    return (
      <div>
        <button onClick={this.eventsView}>Local Scene</button>
        {this.displayAreas(results)}
        
      </div>
    )
  }
  renderLoading() {
    console.log('rendering loading message')
    return (
      <h2>
        Searching your area
      </h2>
    )
  }
  checkResults() {
    const results = this.props.results
    const waiting = this.props.waiting
    if (!results && !waiting)
      return ('')
    if (waiting) 
      return this.renderLoading()
    return this.resultsParser(results)
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
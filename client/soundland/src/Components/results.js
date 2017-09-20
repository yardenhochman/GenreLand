import React, { Component } from 'react';
import Footer from './Footer';
//import Nav from './Nav';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      eventClicked: false,
    }
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
  displayResults(results) {

  }



  resultsParser(results) {
    if (results.message !== 'ok')
      return (
        <div>
          Try a different zipcode.
        </div>
      )
    results = this.sort(results.data)
    return this.displayResults(results)
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
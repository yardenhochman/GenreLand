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

  renderResults(results) {
    console.log(results)
    return ( 
      <div>
        fdsfs
      </div>
    )
  }
  renderLoading() {
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
      return
    if (waiting) 
      this.renderLoading()
    this.renderResults(results)
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
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
  renderResults() {
    const results = this.props.results
    const waiting = this.props.waiting
    if (!results && !waiting)
      return
    if (waiting) {
      return (
        <h2>
          Searching your area
        </h2>
      )
    }
    return (
      <h2>
        dsada
      </h2>
    )
  }
  render() {
    return (
      <div>
        {this.renderResults()}
      </div>
    )
  }
}


export default Results;
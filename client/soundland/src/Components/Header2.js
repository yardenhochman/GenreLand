import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header2 extends Component {
  
  constructor(){
    super();
    this.state = {
      user: {},
      dataLoaded: false,
    }
    this.renderAccountLink = this.renderAccountLink.bind(this)
  }


  componentDidMount(){
      this.setState({
        user: this.props.user,
        dataLoaded: true
      })
  }

  renderAccountLink(){
    return(
      <Link to={`/profile/${this.props.user.id}`} className="nav-button">Account </Link> 
    )
  }

  render(){
    return (
      <div className="nav">

        <div className="lock-up">
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1041163-200.png" alt=""/>
          <Link to={`/`}> <h4>soundland</h4> </Link>
        </div>

        <div className="nav-buttons-align">
          {this.state.dataLoaded ? this.renderAccountLink() : " " }
          <Link to={"/logout"} className="nav-button">Log Out</Link>
          </div>

      </div>
    )
  }
}

export default Header2;
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

/* const SERVER = `http://localhost:3001`;
 */ const SERVER = ``;

class Registration extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password_digest: '',
    password_confirm: '',
    fireRedirect: false,
  };
  componentDidMount = () => {
    console.log(this.state);
  };

  handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    console.log(event.target.name);
    console.log(event.target.value);

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('inside handleformsubmit');
    if (
      this.state.password_digest ===
      this.state.password_confirm
    ) {
      // fetch POST request to server to create new user
      // redirect to their profile? back two pages?

      let data = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password_digest: this.state
          .password_digest,
      };
      //routes here are not valid revist
      axios({
        method: 'POST',
        url: `${SERVER}/auth/register`,
        data: data,
      })
        .then(res => {
          console.log('res.data---->', res.data);
          this.props.userDataForState(res);
          this.setState({
            newID: res.data.id,
            //The res.data.id might be wrong here
            fireRedirect: true,
          });
        })
        .catch(err => console.log(err));
      event.target.reset();
    } else {
      alert(
        'Passwords do not match.. THIS IS THE ELSE STATEMENT',
      );
      // we can update the alert later to be more complex
      this.setState({
        password_digest: '',
        password_confirm: '',
      });
    }
  };

  render = () => {
    const {
      name,
      username,
      email,
      password_digest,
      password_confirm,
      fireRedirect,
    } = this.state;
    return (
      <div className="login-register">
        <div className="top">
          <img
            className="profile-icon"
            alt="radio"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"
          />
          <h3>Register</h3>
        </div>

        <div className="form">
          <form
            onSubmit={event => {
              this.handleFormSubmit(event);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={event => {
                this.handleInputChange(event);
              }}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={event => {
                this.handleInputChange(event);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={event => {
                this.handleInputChange(event);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6"
              required
              value={password_digest}
              onChange={event => {
                this.handleInputChange(event);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirm"
              minLength="6"
              required
              value={password_confirm}
              onChange={event => {
                this.handleInputChange(event);
              }}
            />
            <input
              type="submit"
              value="Register"
            />
          </form>
          {fireRedirect ? (
            <Redirect push to={`/`} />
          ) : (
            ''
          )}
        </div>
        <Link to={`/auth/login`}>
          Already registered? Log in here!
        </Link>
      </div>
    );
  };
}

export default Registration;

import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router'


import { register } from '../../actions';

class Register extends Component {
  state = {
    credentials: {
      username: '',
      password: '',
      email: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.register(this.state.credentials)
  }

  render() {
    if(this.props.isRegistered) {
      return <Redirect to='/' />
    } else {
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type='text' name='username' value={this.state.credentials.username} onChange={this.changeHandler} placeholder='username' />
            <input type='password' name='password' value={this.state.credentials.password} onChange={this.changeHandler} placeholder='password' />
            <input type='email' name='email' value={this.state.credentials.email} onChange={this.changeHandler} placeholder='email' />
            <button type='submit'>Submit</button>
          </form>
          {this.props.error && <p>{this.props.error}</p>}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  error: state.error,
  registering: state.registering,
  isRegistered: state.isRegistered
});

export default connect( mapStateToProps, { register } )(Register);

// Sub-form for general (name, email, phone) information

import React, { Component } from 'react';
import '../styles/General.css';

class General extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      phone: ''
    }
  }

  // Using bracket notation with [e.target.id] to pull
  // the ID from the input field, with this.state being
  // the object that's being referenced
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='section'>
        <form>
          <h2>General Info</h2>
          <div>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              value={this.state.fullName}
              onChange={this.handleChange}
              id='fullName'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              id='email'
            />
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              value={this.state.phone}
              onChange={this.handleChange}
              id='phone'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default General;
// Sub-form for educational information

import React, { Component } from 'react';
import '../styles/App.css';

// CREATE ABILITY TO ADD/DELETE MORE SCHOOLS
// IMPROVE FORMATTING SO IT'S NOT COMPLETELY VERTICAL
class Educational extends Component {
  constructor(props) {
    super(props)

    this.state= {
      school: '',
      major: '',
    }
  }

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
      <div>
        <h2>Educational Info</h2>
        <form>
          <div>
            <label htmlFor='school'>School Attended</label>
            <input
              type='text'
              value={this.state.school}
              onChange={this.handleChange}
              id='school'
            />
          </div>
          <div>
            <label htmlFor='major'>Major (If Applicable)</label>
            <input 
              type='text'
              value={this.state.major}
              onChange={this.handleChange}
              id='major'
            />
          </div>
          <div>
            <label htmlFor='dateStarted'>Date Started</label>
            <input 
              type='date'
              id='dateStarted'
            />
          </div>
          <div>
            <label htmlFor='dateFinished'>Date Finished</label>
            <input 
              type='date'
              id='dateFinished'
            />
          </div>
          <button
            className='submit'
            onClick={this.handleSubmit}
            type='submit'>Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Educational;
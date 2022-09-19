import React, { Component } from 'react';
import '../styles/App.css';

// ADD ABILITY TO ADD/REMOVE JOBS
// IMPROVE FORMATTING SO IT'S NOT COMPLETELY VERTICAL
class Practical extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      position: '',
      taskOne: '',
      taskTwo: '',
      taskThree: ''
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
        <h2>Work History</h2>
        <form>
          <div>
            <label htmlFor='companyName'>Company Name</label>
            <input 
              type='text'
              value={this.state.companyName}
              onChange={this.handleChange}
              id='companyName'
            />
          </div>
          <div>
            <label htmlFor='position'>Position</label>
            <input
              type='text'
              value={this.state.position}
              onChange={this.handleChange}
              id='position'
            />
          </div>
          <div className='tasks'>
            <div>Primary Responsibilities</div>
            <input 
              type='text'
              value={this.state.taskOne}
              onChange={this.handleChange}
              id='taskOne'
              placeholder='Task 1'
            />
            <input 
              type='text'
              value={this.state.taskTwo}
              onChange={this.handleChange}
              id='taskTwo'
              placeholder='Task 2'
            />
            <input 
              type='text'
              value={this.state.taskThree}
              onChange={this.handleChange}
              id='taskThree'
              placeholder='Task 3'
            />
          </div>
          <div>
            <label htmlFor='startDate'>Start Date</label>
            <input 
              type='date'
              id='startDate'
            />
          </div>
          <div>
            <label htmlFor='endDate'>End Date</label>
            <input 
              type='date'
              id='endDate'
            />
          </div>
          <button
            className='submit'
            type='submit'
            onClick={this.handleSubmit}>Submit
            </button>
        </form>
      </div>
    )
  }
}

export default Practical;
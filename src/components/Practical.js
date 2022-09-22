// Sub-form for work history

import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Practical.css';

class Practical extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workHistory: [],
      index: 0,
      experience: {
        id: uniqid(),
        companyName: '',
        position: '',
        taskOne: '',
        taskTwo: '',
        taskThree: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      experiece: {
        [e.target.id]: e.target.value,
        id: this.state.experience.id
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  addForm = () => {
    this.setState({
      workHistory: [...this.state.workHistory, {id: this.state.index}],
      index: this.state.index + 1
    })
  }

  deleteForm = (id) => {
    this.state.workHistory = this.state.workHistory.filter(x => Number(x.id) !== Number(id));
    this.setState({});
  }

  render() {
    return (
      <div>
        <h2>Work History</h2>
          {this.state.workHistory.map((edu) => (
            <div key={edu.id}>
              <form>
                <div class="practical-section">
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
                  </div>
                </div>
              </form>
              <button
                id={edu.id}
                onClick={(e) => this.deleteForm(e.target.id)}>Remove Experience
              </button>
            </div>
          ))}
          <button onClick={this.addForm}>Add Experience</button>
      </div>
    )
  }
}

export default Practical;
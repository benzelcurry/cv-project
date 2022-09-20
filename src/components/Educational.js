// Sub-form for educational information

import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/App.css';

// FIGURE OUT HOW TO DELETE SCHOOLS DYNAMICALLY INSTEAD OF JUST LAST SCHOOL
// IMPROVE FORMATTING SO IT'S NOT COMPLETELY VERTICAL
class Educational extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addEducation: [],
      education: {
        school: '',
        major: '',
        id: uniqid()
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      education: {
        [e.target.id]: e.target.value,
        id: this.state.education.id,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  addForm = () => {
    this.setState({
      addEducation: [...this.state.addEducation, {}],
      index: this.state.index + 1
    })
    console.log(this.state.index);
  }

  deleteForm = (index) => {
    this.state.addEducation.splice(index, 1);
    this.setState({});
  }

  render() {
    return (
      <div>
        <h2>Educational Info</h2>
        {this.state.addEducation.map(() => (
          <div>
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
            </form>
            <button
              id={this.state.index} 
              onClick={(e) => this.deleteForm(e.target.id)}>Remove Education
            </button>
          </div>
        ))}
        <button onClick={this.addForm}>Add Education</button>
      </div>
    )
  }
}

export default Educational;
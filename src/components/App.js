import React, { Component } from 'react';
import General from './General';
import Educational from './Educational';
import Practical from './Practical';
import '../styles/App.css';

// PROJECT WILL NEED STYLING
// MAYBE CHANGE/REDUCE AMOUNT OF BUTTONS
class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className='title'>Curriculum Vitae</h1>
        <General />
        <Educational />
        <Practical />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import General from './General';
import Educational from './Educational';
import '../styles/App.css';

// PROJECT WILL NEED STYLING
// MAYBE CHANGE AMOUNT OF BUTTONS
class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className='title'>Curriculum Vitae</h1>
        <General />
        <Educational />
      </div>
    )
  }
}

export default App;
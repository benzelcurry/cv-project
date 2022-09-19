import React, { Component } from 'react';
import General from './General';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='title'>Curriculum Vitae</div>
        <General />
      </div>
    )
  }
}

export default App;
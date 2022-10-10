import React, { Component } from 'react'

import Navbar from './navbar/Navbar'
import App1 from './App1';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <App1/>
    </div>
    )
  }
}

export default App


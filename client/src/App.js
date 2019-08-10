import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './app.css'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div >
    )
  }
}

export default App;

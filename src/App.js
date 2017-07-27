import React, { Component } from 'react';
// import logo from './logo.svg';
import cover from './img/lo_dash_essentials.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={cover} className="App-cover" alt="cover" height="100" />
          <h2>Lo-Dash Essentials by Adam Boduch</h2>
        </div>
        <p className="App-intro">
          Implement fast, lean and readable code effectively with Lo-Dash
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         {this.props.children}
      </div>
    );
  }
}

export default App;

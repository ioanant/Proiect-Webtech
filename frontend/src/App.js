import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Menu from './containers/Meniu'



class App extends Component {
  render() {
    return (
      <div className="App" >
      <Menu/>
     </div>
    );
  }
}

export default App;

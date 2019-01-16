import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Notes from './containers/Notes'
import Calendar from './containers/Calendar'
import About from './containers/About'
import Menu from './containers/Meniu'




class App extends Component {
  
  
  render() {
    return (

     <div className="App" >
      <img src={'css/image/calendar.gif'} className='gif1'/>
        <Router>
        <div>
            <Menu />
            <div style={{padding:'10px'}}>
              <Route path="/appointments/" exact component={Calendar} />
              <Route path="/notes/"  component={Notes} />
              <Route path="/about/"  component={About} />
            </div>
            </div>
        </Router>
      </div>
  
    );
  }
}

export default App;

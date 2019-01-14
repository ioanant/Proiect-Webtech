import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './containers/Index'
import Notes from './containers/Notes'
import Calendar from './containers/Calendar'
import Grafic from './containers/Grafic'
import About from './containers/About'

import Menu from './component/Menu'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <div>
            <Header />
            <div style={{padding:'10px'}}>
              <Route path="/calendar" exact component={Calendar} />
              <Route path="/notes/" component={Notes} />
              <Route path="/about/" component={About} />
              <Route path="/grafic/" component={Grafic} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

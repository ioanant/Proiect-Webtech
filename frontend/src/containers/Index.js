import React, { Component } from 'react'
import axios from 'axios'
import '.public/css/mycss';

import Calendar from './containers/Calendar'
import Notes from './containers/Notes'
import Grafic from './containers/Grafic'
import About from './containers/About'


import { BrowserRouter as Router, Route } from "react-router-dom";

class Index extends Component {
    show(){
        console.log('Hello')
    }
  render() {
    return (
      <div className="Index" >
      <img src="css/image/calendar.gif" class="gif1"/>
    <div class="icon-bar">
	<Route path="/appointments" component={Calendar}><i class="fa fa-calendar"></i>Calendar </Route>
	<Route path="/notes" component={Notes}><i class="fa fa-pencil"></i>     Note  </Route>
	<Route path="/about" component={About}><i class="fa fa-cogs"></i>      Settings </Route>
    </div>
    </div>
       );
      } 
 }
    
export default Index



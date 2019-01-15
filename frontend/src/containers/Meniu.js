
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});


class Menu extends React.Component {

     constructor(props) {
    super(props)

    let pages = ['/appointments', '/notes', '/about', '/grafic'];
    let labels = ['Calendar', 'Notes', 'About', 'Grafic']

    let pathname = this.props.location.pathname
    pathname = pathname[pathname.length - 1] !== '/' ? pathname : pathname.substr(0, pathname.length - 1)

    let index = pages.indexOf(pathname)

    this.state = {
        value: index,
        pages: pages,
        labels: labels
    };
  }
    handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.state.pages[value])
  };
 render(){
    const { value } = this.state;
    return (
//   <div class="icon-bar">
//   <div>
//     <Route path="/appointments" exact component={Calendar}/><p onChange={this.handleChange}><i class="fa fa-calendar"></i>    Calendar</p>
// 	 <Route path="/notes" exact component={Notes}/><p><i class="fa fa-pencil"></i>     Note</p>
// 	 <Route path="/about" exact component={About}/><p><i class="fa fa-cogs"></i>      About</p>
//      <Route path="/grafic" exact component={Grafic}/><p><i class="fa fa-line-chart"></i>     Graphic</p>
//      </div>
// 	</div>
      
      <div class="icon-bar">
	  <a href="/appointments"><i class="fa fa-calendar"></i>    Calendar</a>
	  <a href="/notes"><i class="fa fa-pencil"></i>     Note</a>
	  <a href="/about"><i class="fa fa-about"></i>    About</a>
	  <a href="/grafic"><i class="fa fa-line-chart"></i>     Graphic</a>
       </div>

	)
 }
 }
 
export default  withRouter(withStyles(styles)(Menu));

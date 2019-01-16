
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

    let pages = ['/appointments', '/notes', '/about'];
    let labels = ['Calendar', 'Notes', 'About']

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
    const { classes } = this.props;
    const { value } = this.state;
    return(
    <div class="icon-bar">
	  <a href="/appointments"><i class="fa fa-calendar"></i>    Calendar</a>
	  <a href="/notes"><i class="fa fa-pencil"></i>     Note</a>
	  <a href="/about"><i class="fa fa-about"></i>    About</a>
      </div>

	)
 }
 }
 
export default  withRouter(withStyles(styles)(Menu));

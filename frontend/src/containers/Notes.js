import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import Note from '../component/Note'

const API_BASE_URL = 'https://proiectfinal-ioanaantonescu.c9users.io'

class Notes extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        notes: []
      }
    }

    componentDidMount() {
      axios.get(API_BASE_URL + '/notes').then((result) => {
        this.setState({notes: result.data.results})
      })
    }
  
    render() {
      // if (this.props.data) {
      // var commentNodes =this.state.notes.map((note)=>{
      // return (
      //   <div class="notita">
      //   <Note notes={note}/>
      //   </div>
      // )})
      // return (
      //   <div className="listaNotite">
      //     {commentNodes}
      //   </div>
      //   )}
      
      return(
        <div class="listaNotite">
        <h1>Notite</h1>
      	<ul>
       {this.state.contacts &&this.state.notes.map((note) => <Note key={note.id} notes={note}/>)}
       </ul>
       </div>
   )
  }
}

export default Notes
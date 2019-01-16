import React, { Component } from 'react';
import axios from 'axios'
import Note from '../component/Note'

const API_BASE_URL = 'https://proiectfinal-ioanaantonescu.c9users.io/api'
 
class Notes extends Component {
    constructor(props) {
      super(props)
      this.state = {
        notes: []
      };
    
    }

    componentDidMount() {
      axios.get(API_BASE_URL + '/notes').then((result) => {
        console.log(result);
        this.setState({notes: result.data.results})
      }).catch((err)=>
         console.log(err)
         )
    }
  
    render() {
  
       console.log('start');
      return(
        <div class="listaNotite">
        <h1 class="titluDespre">Notite</h1>
      	<ul>
      {this.state.notes && this.state.notes.map((note) => <Note key={note.id} notes={note}/>)}
      </ul>
      </div>)
  }
}

export default Notes;
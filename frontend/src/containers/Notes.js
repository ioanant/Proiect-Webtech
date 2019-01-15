import React, { Component } from 'react';

import axios from 'axios'

import Note from '../component/Note'

const API_BASE_URL = 'https://proiect-ioanaantonescu.c9users.io/'

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
      return (
      
        <div class="listaNotite">
        {this.state.notes.map((note)=> <Note key={note.id} notes={note}/>)}
        </div>
      )
    }
  }

export default Notes
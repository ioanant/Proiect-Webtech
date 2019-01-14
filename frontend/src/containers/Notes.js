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
        <div>
        <h1>Notite</h1>
       	<br/>
			<ul>
       <li>
      <a href={this.state.notes.map((note) => {note.id})}>
        {this.state.notes.map((note) => <Note key={note.id} note={note}/>)}
      </a>
    </li>
    </ul>
       </div>
      )
    }
  }

export default Notes
import React, { Component } from 'react';


class Note extends Component {
    render() {
      let notes = this.props.notes;
      
      return (
        <ul>
        <li>
        <a href={notes.id}>
        <h2>{notes.name_note}</h2>
        <p>{notes.text}</p>
      </a>
    </li>
    </ul>
    
      )  
    }
  }

  export default Note
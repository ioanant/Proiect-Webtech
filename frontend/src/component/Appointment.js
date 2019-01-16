import React, { Component } from 'react';


class Appointment extends Component {
    render() {
      let appointments = this.props.appointments;
      
      return (
     
      <li><p><em>{appointments.name}</em> {appointments.data} {appointments.location} {appointments.domain}</p></li>
  
      );  
    }
  }

  export default Appointment;
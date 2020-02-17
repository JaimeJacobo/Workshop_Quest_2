import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {

  state = {
    contacts: 
    [
      {
      name: 'Jaime',
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
      connected: false
      },
      {
      name: 'Conchi',
      image: 'https://randomuser.me/api/portraits/women/50.jpg',
      connected: true
      },
      {
      name: 'Arturo',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      connected: false
      },
      {
      name: 'Arturo',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      connected: false
      },
      {
      name: 'Arturo',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      connected: true
      }
    ]
  }

  checkForStatus(person){
    return (
      person.connected
      ? <Contact name={person.name} image={person.image} onlineStatus/>
      : <Contact name={person.name} image={person.image} />
    )
  }

  renderPeople(){
   return(
    this.state.contacts.map((person)=>{
      return this.checkForStatus(person)
    })
   ) 
  }

  render(){
    return (
      <div className="ContactList">
        {this.renderPeople()}
      </div>
    );    
  }
}

export default ContactList;

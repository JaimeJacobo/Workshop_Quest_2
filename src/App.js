import React, {Component} from 'react';
import './App.css';
import Contact from './components/Contact';

class App extends Component {

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

  render(){
    return (
      <div className="App">
        {this.checkForStatus(this.state.contacts[0])}
        {this.checkForStatus(this.state.contacts[1])}
        {this.checkForStatus(this.state.contacts[2])}
      </div>
    );    
  }
}

export default App;

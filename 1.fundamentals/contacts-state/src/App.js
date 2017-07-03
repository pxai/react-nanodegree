import React, { Component } from 'react';
import ListContacts from './ListContacts'

// User prop-types to make sure that what we pass is
// of proper type: arrays, objects, or whatever
/**
 * React compares the previous output and new output, determines what has changed, and makes these decisions for us. 
 * This process of determining what has changed in the previous and new outputs is called Reconciliation.
 */
class App extends Component {
  // Move contacts inside so they become part of state
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

removeContact = (contact) =>  {
  this.setState((state) => ({ // Though the initial state of this component contains two properties (subject and message), they can be updated independently.
    contacts:state.contacts.filter( (c) => c.id !== contact.id)
  }))
}
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
      </div>
    )
  }
}

export default App;

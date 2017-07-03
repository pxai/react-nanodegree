import React, { Component } from 'react';
import ListContacts from './ListContacts'
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

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

// User prop-types to make sure that what we pass is
// of proper type: arrays, objects, or whatever
/**
 * React compares the previous output and new output, determines what has changed, and makes these decisions for us. 
 * This process of determining what has changed in the previous and new outputs is called Reconciliation.
 */
class App extends Component {
  state = {
  contacts: []
 }

componentDidMount() {
  ContactsAPI.getAll().then((contacts) => {
  this.setState({ contacts })
 })
}
removeContact = (contact) => {
      this.setState((state) => ({
       contacts: state.contacts.filter((c) => c.id !== contact.id)
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

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';

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
createContact (contact) {
  ContactsAPI.create(contact).then(contact => {
    this.setState(state => ({
      contacts: state.contacts.concat([contact])
    }))
  })
}
  render() {
    return (
      <div>
        <Route path="/" exact render={() => (
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact} 
          />
       )}/>
        <Route path="/create" render={({history}) => (
          <CreateContact 
            onCreateContact={(contact) =>{
                this.createContact(contact);
                history.push("/")
            }}
          />
         )}/>
       </div>
    )
  }
}

export default App;

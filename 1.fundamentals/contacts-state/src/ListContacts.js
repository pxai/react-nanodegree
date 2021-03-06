import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// User prop-types to make sure that what we pass is
// of proper type: arrays, objects, or whatever
// Defined below

// This is a stateless function component!!
// It does not need this keyword
// Use whe we just have a render() method
/*function ListContacts (props) {
  return (
            <ol className="contact-list">
               { 
                   props.contacts.map((contact) =>
                   (
                       <li key={contact.id} className="contact-list-item">
                           <div className="contact-avatar" style={{
                               backgroundImage: `url(${contact.avatarURL})`
                           }} />
                           <div className="contact-details">
                           <p>{contact.name}</p>
                           <p>{contact.email}</p>
                               </div>
                               <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
                                   Remove
                                   </button>
                        </li>
                   ))
               }
                </ol>
        )
}*/

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query  : ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() });
    }

    clearQuery = () => {
        this.setState({query: ''});
    }

    render () {
        const { contacts, onDeleteContact} = this.props
        let showingContacts;
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query),'i') // any special character, case insensitive
            showingContacts = contacts.filter((contact) => match.test(contact.name))
         } else {
            showingContacts = contacts
        }
        showingContacts.sort(sortBy('name'));

        // console.log('Props debug: ' + this.props);
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                      className="search-contacts"
                      type="text"
                      placeholder="Search contacts"
                      value={this.state.query}
                      onChange={(event) => this.updateQuery(event.target.value)} 
                    />
                    <Link 
                    to="/create"
                    className="add-contact"
                    >Add Contact</Link>
                </div>
               
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>   
                        <button onClick= {this.clearQuery}>Show all</button> 
                    </div>
                )}

            <ol className="contact-list">
               { 
                   showingContacts.map((contact) =>
                   (
                       <li key={contact.id} className="contact-list-item">
                           <div className="contact-avatar" style={{
                               backgroundImage: `url(${contact.avatarURL})`
                           }} />
                           <div className="contact-details">
                           <p>{contact.name}</p>
                           <p>{contact.email}</p>
                               </div>
                               <button onClick={()=>onDeleteContact(contact)} className='contact-remove'>
                                   Remove
                                   </button>
                        </li>
                   ))
               }
                </ol>
            </div>
        )
    }
}



export default ListContacts;
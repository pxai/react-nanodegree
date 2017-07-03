import React from 'react';
import PropTypes from 'prop-types'

// User prop-types to make sure that what we pass is
// of proper type: arrays, objects, or whatever
// Defined below

// This is a stateless function component!!
// It does not need this keyword
// Use whe we just have a render() method
function ListContacts (props) {
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
}
/*
class ListContacts extends Component {
    render () {
        // console.log('Props debug: ' + this.props);
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
                               <button className='contact-remove'>
                                   Remove
                                   </button>
                        </li>
                   ))
               }
                </ol>
        )
    }
}
*/

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ListContacts;
import React from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const filteredContacts = contacts.filter((contact) => {
      if (filter) {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }
      return true;
    },
  );
  return (
    <div>
      <h2>Contacts</h2>
      {!filteredContacts.length && <p>No contacts found!</p>}
      {filteredContacts && (
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
      )}
    </div>
  );
};

export default ContactList;

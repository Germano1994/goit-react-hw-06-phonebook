import React from 'react';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    filter && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

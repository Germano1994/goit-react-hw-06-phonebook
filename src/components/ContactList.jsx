import React from 'react';
import ContactItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './redux/contactsSlice'; 
import styles from './ContactList.module.css'; 

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const filteredContacts = contacts.filter((contact) => {
    if (filter) {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return true;
  });

  const dispatch = useDispatch(); 

  const handleDelete = (id) => {

    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>
      {!filteredContacts.length && <p>No contacts found!</p>}
      {filteredContacts && (
        <ul className={styles.list}>
          {filteredContacts.map((contact) => (
            <li className={styles['list-item']} key={contact.id}>
              <ContactItem contact={contact} />
              <button
                onClick={() => handleDelete(contact.id)} 
                className={styles['delete-button']}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;

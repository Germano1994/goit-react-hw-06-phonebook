import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.item}>
        {contact.name}: {contact.number}
        <button onClick={() => onDeleteContact(contact.id)} className={styles.button}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {


  return (
    <div className={styles.item}> {}
      <div>Name: {contact.name}</div>
      <div>Number: {contact.number}</div>
      
    </div>
  );
};

export default ContactItem;

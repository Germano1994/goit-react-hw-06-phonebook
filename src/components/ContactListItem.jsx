import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number }) => (
  <li className={styles.item}>
    {name}: {number}
  </li>
);

export default ContactListItem;

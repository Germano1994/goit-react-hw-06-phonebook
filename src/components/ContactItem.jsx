import React from 'react';
import { deleteContact } from './redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({contact}) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div style={{display:'flex', }}>
      <div>Name: {contact.name}</div>
      <div>Number: {contact.number}</div>
      <div><button onClick={() => handleDelete(contact.id)}>X</button></div>
    </div>
  );
};

export default ContactItem;

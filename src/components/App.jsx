import React from 'react';
import { Provider } from "react-redux";
import store, { persistor } from "../components/store/store.js";
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, deleteContact } from './redux/contactsSlice.js';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(state => state.contacts.list);

  //   useEffect(() => {
  //     const savedContacts = localStorage.getItem('contacts');
  //     if (savedContacts) {
  //       dispatch(addContact(JSON.parse(savedContacts)));
  //     }
  //   }, [dispatch]);

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  //   const handleAddContact = newContact => {
  //     dispatch(addContact(newContact));
  //   };

  //   const handleDeleteContact = id => {
  //     dispatch(deleteContact(id));
  //   };

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

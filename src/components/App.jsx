import React from 'react';
import { Provider } from "react-redux";
import store, { persistor } from "../components/store/store.js";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { PersistGate } from "redux-persist/integration/react";


const App = () => {

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

// import React from 'react';


// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul className={styles.list}>
//     {contacts.map(contact => (
//       <li key={contact.id} className={styles.item}>
//         {contact.name}: {contact.number}
//         <button onClick={() => onDeleteContact(contact.id)} className={styles.button}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;



// import React from "react";
// import styles from './ContactList.module.css';
// import { useSelector, useDispatch } from "react-redux";
// import ContactListItem from "./ContactListItem";
// import { deleteContact, selectContacts } from "../components/redux/contactsSlice";

// const ContactList = () => {
//     const contacts = useSelector(selectContacts);
//     const filter = useSelector((state) => state.contacts.filter);
//     const dispatch = useDispatch();

//     const filteredContacts = contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     const handleDeleteContact = (id) => {
//         dispatch(deleteContact(id));
//     };

//     return (
//         <ul>
//             {filteredContacts.map((contact) => (
//                 <ContactList
//                     key={contact.id}
//                     contact={contact}
//                     onDeleteContact={handleDeleteContact}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default ContactList;



import React from "react";
import ContactListItem from "./ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../components/redux/contactsSlice";


const ContactList = () => {
    const contactsSelector = state => state.contacts.list;
const filterSelector = state => state.contacts.filter;

const contacts = useSelector(contactsSelector);
const filter = useSelector(filterSelector);

    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        filter && contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul>
            {filteredContacts.map((contact) => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={handleDeleteContact}
                />
            ))}
        </ul>
    );
};

export default ContactList;

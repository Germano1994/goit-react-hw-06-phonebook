import React from "react";
import ContactListItem from "./ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../components/redux/contactsSlice.js";

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

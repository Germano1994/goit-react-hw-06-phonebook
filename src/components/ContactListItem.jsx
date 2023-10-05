import React from "react";
import ContactListItem from "./ContactListItem"; 
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../components/redux/contactsSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
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

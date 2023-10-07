import React from "react";

const ContactListItem = ({ contact, onDeleteContact }) => {
    const handleDeleteClick = () => {
        onDeleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {contact.name} - {contact.number}
            <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>
                Delete
            </button>
        </li>
    );
};

export default ContactListItem;
import React from 'react';
import { List } from '../Phonebook.styled';
import { ContactListContainer, Button } from './ContactList.styled';

export const ContactList = ({ value, onDeleteContact }) => (
    <List>
        {value.map(({ id, name, number }) => {
            return (
                <ContactListContainer>
                    <li key={id}>
                        {name} : {number}
                    </li>
                    <Button type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </Button>
                </ContactListContainer>
            );
        })}
    </List>
);

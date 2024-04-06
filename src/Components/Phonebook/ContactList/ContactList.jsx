import React from 'react';
import { List } from '../Phonebook.styled';
// import { Text } from './Filter.styled';

export const ContactList = ({ value }) => (
    <List>
        {value.map(contact => {
            return (
                <li key={contact.id}>
                    {contact.name} : {contact.number}
                </li>
            );
        })}
    </List>
);

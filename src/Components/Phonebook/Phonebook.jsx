import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PhonebookContainer, Text } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class Phonebook extends Component {
    state = {
        contacts: [
            { id: nanoid(), name: 'Emma Williams', number: '459-12-56' },
            { id: nanoid(), name: 'Alex Johnson', number: '443-89-12' },
            { id: nanoid(), name: 'Ethan Anderson', number: '645-17-79' },
        ],
        filter: '',
    };

    handleChangeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    handleFilter = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    handleAddContact = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    render() {
        const { filter } = this.state;
        const filteredContacts = this.handleFilter();

        return (
            <PhonebookContainer>
                <Text>Phonebook</Text>
                <ContactForm setContact={this.handleAddContact} />
                <Text>Contact:</Text>
                <Filter value={filter} onChange={this.handleChangeFilter} />
                <ContactList value={filteredContacts} />
            </PhonebookContainer>
        );
    }
}

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, PhonebookContainer, Text, Name } from './Phonebook.styled';

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
    };

    render() {
        return (
            <PhonebookContainer>
                <Text>Name</Text>
                <Name type="text" name="name" required />
                <Button color="#4CAF50" hoverColor="#45a049">
                    Add contact
                </Button>
            </PhonebookContainer>
        );
    }
}

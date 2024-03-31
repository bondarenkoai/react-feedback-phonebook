import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button, PhonebookContainer, Text, InputName } from './Phonebook.styled';

export class Phonebook extends Component {
    nameInputId = nanoid();

    state = {
        contacts: [],
        name: '',
    };

    handleChange = e => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(`Signed up as: ${this.state.name}`);
        this.props.onSubmit({ ...this.state });
    };

    render() {
        const { name } = this.state;

        return (
            <PhonebookContainer>
                <form onSubmit={this.handleSubmit}>
                    <Text htmlFor={this.nameInputId}>
                        Name
                        <InputName
                            type="text"
                            name="name"
                            placeholder="Enter name..."
                            value={name}
                            id={this.nameInputId}
                            onChange={this.handleChange}
                            required
                        />
                    </Text>
                    <Button type="submit">Add contact</Button>
                </form>
            </PhonebookContainer>
        );
    }
}

Phonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

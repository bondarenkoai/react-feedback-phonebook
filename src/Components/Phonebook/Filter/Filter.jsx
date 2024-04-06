import React from 'react';
import { InputName } from '../Phonebook.styled';
// import { Text } from './Filter.styled';

export const Filter = ({ contacts, onChange }) => (
    <label>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>Find contacts by name</p>
        <InputName
            type="text"
            name="filter"
            placeholder="Enter find name..."
            value={contacts}
            onChange={onChange}
        />
    </label>
);

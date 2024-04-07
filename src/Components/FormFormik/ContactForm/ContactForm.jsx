import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import { Button, Label, InputName } from '../FormFormik.styled';

// nameInputId = nanoid();
// numberInputId = nanoid();

const initialValues = {
    name: '',
    number: '',
};

export const FormFormik = () => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log(values.name);
        console.log(values.number);
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };

        initialValues.contacts.push(newContact);
        console.log(initialValues.contacts);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form autoComplete="off">
                <Label>
                    Name
                    <InputName type="text" name="name" placeholder="Enter name..." required />
                </Label>
                <Label>
                    Number
                    <InputName type="tel" name="number" placeholder="Enter number..." required />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    );
};

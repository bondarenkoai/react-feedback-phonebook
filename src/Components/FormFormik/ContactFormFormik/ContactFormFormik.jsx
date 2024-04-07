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

export const FormFormik = ({ setContact }) => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log(values.name);
        console.log(values.number);
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        setContact(newContact);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form autoComplete="off">
                <Label htmlFor="name">
                    Name
                    <Field
                        as={InputName}
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        required
                    />
                </Label>
                <Label htmlFor="number">
                    Number
                    <Field
                        as={InputName}
                        type="tel"
                        name="number"
                        placeholder="Enter number..."
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    );
};

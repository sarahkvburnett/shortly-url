import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { PrimaryFormBtn, Form, Label, Input } from '../Styles';
import { Errors } from './AuthErrors';
import axios from 'axios';

export const Signup =  () => {
    const [ formValues, setFormValues ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });
    const { firstName, lastName, email, password, password2, errors } = formValues;
    const handleChange = (event) => {
        event.persist()
        setFormValues(values => ({...values, [event.target.id]: event.target.value}))   
    };
    const signup = (event) => {
        event.preventDefault()
        axios
          .post('/api/users/signup', {firstName, lastName, email, password})
          .then(() => <Redirect to="/login" />)
          .catch(err => err)
    };
    return (
        <Form onSubmit={signup}>
            <h3>Sign Up</h3>
            { formValues.error && <Errors errors={errors}/> }
            <Label HTMLfor="firstName">First Name <Input id="firstName" name="firstName" onChange={handleChange} value={firstName} required></Input></Label>
            <Label HTMLfor="lastName">Last Name <Input id="lastName" name="lastName" onChange={handleChange} value={lastName} required></Input></Label>
            <Label HTMLfor="email">Email <Input type="email" id="email" name="email" onChange={handleChange} value={email} required></Input></Label>
            <Label HTMLfor="password">Password <Input type="password" id="password" name="password" onChange={handleChange} value={password} required></Input></Label>
            <Label HTMLfor="password2">Confirm your password <Input type="password" id="password2" name="password2" onChange={handleChange} value={password2} required></Input></Label>
            <PrimaryFormBtn type="submit">Sign up</PrimaryFormBtn>
        </Form>
    );
}
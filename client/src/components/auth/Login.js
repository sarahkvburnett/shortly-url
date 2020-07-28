import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { setAuthToken }  from '../../utilities/setAuthToken';
import Errors from './AuthErrors';
import axios from 'axios';
import { isLoginValid } from '../../utilities/validateAuth';
import { AuthForm, Label, Input, FormBtn, PrimaryFormBtn } from '../Styles';
import { useUser } from '../../hooks/useUser';
import { useLinks } from '../../hooks/useLinks';

const Login = () => {
    const { setUser } = useUser();
    const { removeBrowserLinks } = useLinks();
    const [ formValues, setFormValues ] = useState({
        email: '',
        password: '',
    });
    const [ errors, setErrors ] = useState([]);
    const { email, password} = formValues;
    const handleChange = (event) => {
        event.persist()
        setFormValues(values => ({...values, [event.target.id]: event.target.value}))   
    };
    const login = (event) => {
        event.preventDefault();
        const errorMsgs = isLoginValid(formValues);
        if (errorMsgs.length !== 0) return setErrors(errorMsgs);
        axios
          .post('/api/users/login', {email, password})
          .then((res) => {
              const { token } = res.data;
              const { firstName, id } = jwt_decode(token);
              setAuthToken(token);
              setUser(() => ({ isAuth: true, firstName, id, token}));
              removeBrowserLinks();
              return <Redirect to="/dashboard"/>
          })
          .catch(err => setErrors([err.response.data.error || "Login failed. Please try again"]));
    };
  
    return (
        <AuthForm onSubmit={login} noValidate>
            <h3>Login</h3>
            { errors.length > 0 && <Errors errors={errors}/> }
            <Label HTMLfor="email">Email <Input type="email" id="email" name="email" onChange={handleChange} value={email} required></Input></Label>
            <Label HTMLfor="password">Password <Input type="password" id="password" name="password" onChange={handleChange} value={password}required></Input></Label>
            <PrimaryFormBtn type="submit">Submit</PrimaryFormBtn>
            <FormBtn type="button">Forgot password</FormBtn>
        </AuthForm>
    )
};

export default Login;
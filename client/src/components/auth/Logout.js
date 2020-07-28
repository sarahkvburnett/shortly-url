import React from 'react'
import { Redirect } from 'react-router-dom';
import { setAuthToken }  from '../../utilities/setAuthToken';
import { AuthForm, PrimaryFormBtn } from '../Styles';
import { useUser } from '../../hooks/useUser';

const Logout = () => {
    const { setUser } = useUser();
    const logout = () => {
        setAuthToken(false);
        setUser( () => ({isAuth: false}))
    };
    return (
        <AuthForm>
            <h3>Are you sure you want to logout?</h3>
            <PrimaryFormBtn onClick={logout}>Yes</PrimaryFormBtn>
            <PrimaryFormBtn onClick={<Redirect to="/"/>}>No</PrimaryFormBtn>
        </AuthForm>
    )
};

export default Logout;
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { setAuthToken }  from '../../utilities/setAuthToken';
import { UserContext } from '../../context/UserContext';
import { Form, PrimaryFormBtn } from '../../Styles';

export const Logout = () => {
    const [ user, setUser ] = useContext(UserContext)
    const logout = () => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        setUser( () => ({isAuth: false}))
    };
    return (
        <Form>
            <h3>Are you sure you want to logout?</h3>
            <PrimaryFormBtn onClick={logout}>Yes</PrimaryFormBtn>
            <PrimaryFormBtn onClick={<Redirect to="/"/>}>No</PrimaryFormBtn>
        </Form>
    )
}
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// check docs to fix this!! 

export const PublicRoute = ({children, isAuth}) => {
    return (
        <Route render={ () => isAuth ? (<Redirect to="/dashboard"/>) : (children) }/>
    )
}

export const PrivateRoute = ({children, isAuth}) => {
    return (
        <Route render={ () => isAuth ? (children) : (<Redirect to="/login"/>) }/>
    )
}
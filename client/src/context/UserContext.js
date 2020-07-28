import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [ user, setUser] = useState({
        isAuth: false,
        firstName: undefined,
        id: undefined,
        token: undefined,
    });
    
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
};
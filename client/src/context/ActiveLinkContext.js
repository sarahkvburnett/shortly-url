import React, { useState, createContext } from 'react';

export const ActiveLinkContext = createContext();

export const ActiveLinkProvider = (props) => {
    const [ activeLink, setActiveLink] = useState();

    return (
        <ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
            {props.children}
        </ActiveLinkContext.Provider>
    )
};
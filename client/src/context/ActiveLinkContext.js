import React, { useState, createContext } from 'react';

export const ActiveLinkContext = createContext();

export const ActiveLinkProvider = (props) => {
    const [ activeLink, setActiveLink] = useState({
        activeLink: [],
        process: false
    });

    return (
        <ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
            {props.children}
        </ActiveLinkContext.Provider>
    )
};
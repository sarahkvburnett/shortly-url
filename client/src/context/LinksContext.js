import React, { useState, createContext } from 'react';

export const LinksContext = createContext();

export const LinksProvider = (props) => {
    const [ links, setLinks] = useState([]);

    return (
        <LinksContext.Provider value={[links, setLinks]}>
            {props.children}
        </LinksContext.Provider>
    )
};
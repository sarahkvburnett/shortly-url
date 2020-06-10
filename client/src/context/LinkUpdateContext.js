import React, { useState, createContext } from 'react';

export const LinkUpdateContext = createContext();

export const LinkUpdateProvider = (props) => {
    const [ linkUpdate, setLinkUpdate] = useState();
    return (
        <LinkUpdateContext.Provider value={[linkUpdate, setLinkUpdate]}>
            {props.children}
        </LinkUpdateContext.Provider>
    )
};
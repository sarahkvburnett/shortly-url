import React, { useState, createContext } from 'react';

export const ProcessLinkContext = createContext();

export const ProcessLinkProvider = (props) => {
    const [ processLink, setProcessLink] = useState({
        link: [],
        process: false
    });
    return (
        <ProcessLinkContext.Provider value={[processLink, setProcessLink]}>
            {props.children}
        </ProcessLinkContext.Provider>
    )
};
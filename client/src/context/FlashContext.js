import React, { useState, createContext } from 'react';

export const FlashContext = createContext();

export const FlashProvider = (props) => {
    const [ flash, setFlash ] = useState({
        flashMsg: "",
        isFlashVisible: false,
        isAutoHideFlash: true,
    });
    return (
        <FlashContext.Provider value={[flash, setFlash]}>
            {props.children}
        </FlashContext.Provider>
    )
};
import React from 'react';
import styled from 'styled-components';
import { greyViolet, grey, alignPadding, Button } from './Styles';
import { useFlash } from '../hooks/useFlash';

const FlashMsg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100vw;
    z-index: 150;
    background: ${greyViolet};
    padding: 1vh ${alignPadding};
    color: ${grey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        font-size: larger;
    }
`

const Flash = () => {
    const { flashMsg, isAutoHideFlash, autoHideFlash, manualHideFlash } = useFlash();
    if (isAutoHideFlash) autoHideFlash();
    return (
        <FlashMsg>
            <p>{flashMsg}</p>
            <Button onClick={manualHideFlash}>&times;</Button>
        </FlashMsg>
    )
};

export default Flash;
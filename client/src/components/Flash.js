import React, { useEffect } from 'react';
import styled from 'styled-components';
import { greyViolet } from './Styles';
import useFlash from '../hooks/useFlash';

const FlashMsg = styled.div`
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    top: 10vh;
    left: 0;
    background: ${greyViolet};
    padding: 1vh 2vw;
`

const Flash = () => {
    const { flashMsg, hideFlash } = useFlash();
    setTimeout(hideFlash, 2500);
    return (
        <FlashMsg>
            {flashMsg}
        </FlashMsg>
    )
};

export default Flash;
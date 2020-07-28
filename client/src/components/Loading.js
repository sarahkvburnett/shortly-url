import React from 'react';
import styled from 'styled-components';
import { LoadIcon, Load, grey } from './Styles';

const LoadScreen = styled(Load)`
    height: 50vh;
    background: ${grey};
`

const Loading = ({msg}) => {
    return (
        <LoadScreen>
            <LoadIcon/>
        </LoadScreen>
    )
}

export default Loading;

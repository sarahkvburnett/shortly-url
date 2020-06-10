import React from 'react';
import styled from 'styled-components';
import { darkViolet, cyan, grey, violet, white } from '../Styles';

const Load = styled.div`
    height: 50vh;
    background: ${darkViolet};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: ${cyan};
        margin-bottom: 2vh;
    }
`

const LoadIcon = styled.div`
    @keyframes spin {
        0% { transform: rotate(0deg)}
        100% { transform: rotate(360deg)}
    }
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 8px solid ${grey};
    border-top: 8px solid ${cyan};
    animation: spin 2s linear infinite;
`

const Links = styled.div`
    background: ${grey};
    opacity: 0.7;
    .active {
        background: ${violet};
        margin: 2vh 2vw;
        height: 25vh;
    }
    .inactive {
        background: ${white};
        margin: 2vh 2vw;
        height: 25vh;
    }
`

export const DashLoad = () => {
    return (
        <Load>
            <p>Fetching Links...</p>
            <LoadIcon/>
        </Load>
    )
};

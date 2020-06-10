import React from 'react';
import styled from 'styled-components';
import { red } from '../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${red};
    margin: 3vh 0;
    div {
        margin-left: 1vw;
        font-size: smaller;
    }
    border: 1px solid ${red};
    padding: 1vh 1vw;
    border-radius: 5px;
`

export const Error = ({errors}) => {
    return (
        <ErrorBar> 
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <div>
                 { errors.map( (error, index) => <p key={index}>{error}</p>) }
            </div>
        </ErrorBar>
    )
};
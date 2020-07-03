import React from 'react';
import styled from 'styled-components';
import { red, Error } from '../../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorBar = styled(Error)`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 3vh 0;
    font-size: inherit;
    div {
        margin-left: 2vw;
        font-size: smaller;
        p {
            margin: .5vh 1vw;
        }
    }
    border: 1px solid ${red};
    border-radius: 5px;
`

export const Errors = ({errors}) => {
    console.log(errors);
    return (
        <ErrorBar> 
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <div>
                 {errors.map( (error, index) => <p key={index}>{error}</p> )}
            </div>
        </ErrorBar>
    )
};
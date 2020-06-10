import React from 'react';
import styled from 'styled-components';
import { breakpoint, violet, red } from '../Styles';
import { LinkForm } from './LinkForm';

const Shortener = styled.div`
    position: relative;
    width: 80vw;
    top: -15vh;
    background-image: url('../images/shorten-mobile.svg');
    @media (min-width: 500px) {
        background-image: url('../images/shorten-desktop.svg')
    }
    background-color: ${violet};
    height: 30vh;
    margin: auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: ${breakpoint}) {
        height: 20vh;
        top: -10vh;
    }
    .error {
        position: absolute;
        top: 13vh;
        color: ${red};
        font-size: smaller;
        font-style: italic;
        width: 70vw;
        @media (min-width: ${breakpoint}) {
            top: 15vh;
        }
    }
    form {
        width: 70vw;
        margin: auto;
        @media (min-width: ${breakpoint}) {
            height: 10vh;
            .linkSubmitBtn {
                display: inline-block;
                width: 13vw;
                margin-left: 2vw;
                margin-top: 0vw;
            }
            .linkInput {
                display: inline-block;
                width: 55vw;
            }
        }
        
    }
`

export const LinkShortener = () => {
    return (
        <Shortener>
            <LinkForm/>
        </Shortener>
    )
}

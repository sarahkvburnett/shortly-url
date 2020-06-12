import React from 'react';
import styled from 'styled-components';
import { breakpoint, violet } from '../Styles';
import { LinkForm } from './LinkForm';
import imgDesktop from '../images/bg-shorten-desktop.svg';
import imgMobile from '../images/bg-shorten-mobile.svg';

const Shortener = styled.div`
    position: relative;
    width: 80vw;
    background-image: url(${imgMobile});
    @media (min-width: 500px) {
        background-image: url(${imgDesktop})
    }
    background-color: ${violet};
    min-height: 30vh;
    margin: 2vh auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: ${breakpoint}) {
        height: 20vh;
        top: -10vh;
    }
`

export const LinkShortener = ({position}) => {
    return (
        <Shortener style={{top: position}}>
            <LinkForm/>
        </Shortener>
    )
}

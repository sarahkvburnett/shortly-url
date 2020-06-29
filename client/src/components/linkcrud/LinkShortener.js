import React from 'react';
import styled from 'styled-components';
import { breakpoint, violet } from '../../Styles';
import { LinkAdder } from './LinkAdder';
import imgDesktop from '../../images/bg-shorten-desktop.svg';
import imgMobile from '../../images/bg-shorten-mobile.svg';

const Shortener = styled.div`
    position: relative;
    width: 80vw;
    background-image: url(${imgMobile});
    background-color: ${violet};
    min-height: 30vh;
    margin: 2vh auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: ${breakpoint}) {
        top: -10vh;
        background-image: url(${imgDesktop})
    }
`

export const LinkShortener = ({position}) => {
    return (
        <Shortener style={{top: position}}>
            <LinkAdder/>
        </Shortener>
    )
}

import React from 'react';
import styled from 'styled-components';
import { breakpoint, violet, alignWidth, smallerWidth } from '../../Styles';
import { LinkAdder } from './LinkAdder';
import imgDesktop from '../../images/bg-shorten-desktop.svg';
import imgMobile from '../../images/bg-shorten-mobile.svg';

const Shortener = styled.div`
    position: relative;
    width: ${alignWidth};
    background-image: url(${imgMobile});
    background-color: ${violet};
    background-size: cover;
    min-height: 128px;
    margin: 2vh auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 375px) {
        background-image: url(${imgDesktop});
    }
    @media (min-width: ${breakpoint}) {
        top: -10vh;
        width: ${smallerWidth};
    }
`

export const LinkShortener = ({position}) => {
    return (
        <Shortener style={{top: position}}>
            <LinkAdder/>
        </Shortener>
    )
}

import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, white, violet, breakpoint } from '../Styles';
import imgDesktop from '../images/bg-boost-desktop.svg';
import imgMobile from '../images/bg-boost-mobile.svg';

const BoostBox = styled.div`
    background: ${violet} url(${imgMobile}) no-repeat;
    @media (min-width: ${breakpoint}) {
        background-image: url(${imgDesktop});
    };
    width: 100vw;
    padding: 2vh 2vw;
    margin: auto;
    margin-bottom: 10vh;
    color: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    button {
        border-radius: 30px;
        padding: 2vh 5vw;
        margin: 2vh 0;
    }
`

export const Boost = () => {
    return (
        <BoostBox>
            <h1>Boost your links today</h1>
            <PrimaryButton><h2>Get Started</h2></PrimaryButton>
        </BoostBox>
    )
}

import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, white, violet } from '../Styles'

const BoostBox = styled.div`
    background: ${violet} url('../images/bg-boost-mobile.svg') no-repeat;
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

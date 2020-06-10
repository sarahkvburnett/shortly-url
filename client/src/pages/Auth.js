import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { white, breakpoint } from '../Styles';
import { Login } from '../components/Login';
import { Logout } from '../components/Logout';
import { Signup } from '../components/Signup';
import MediaQuery from 'react-responsive';
import image from '../images/illustration-working.svg';

const AuthPg = styled.div`
    min-height: 70vh;
    display: flex;
    background: ${white};
`

const Img = styled.div`
    min-height: 70vh;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Auth = ({auth}) => {
    return (
        <AuthPg>
            <MediaQuery minDeviceWidth={breakpoint}>
                <Img><img src={image} alt="woman working at desk"/></Img>
            </MediaQuery>
            { auth==="login" && <Login/> }
            { auth==="logout" && <Logout/> }
            { auth==="signup" && <Signup/> }
        </AuthPg>
    )
}
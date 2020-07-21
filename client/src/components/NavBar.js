import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import styled from 'styled-components';
import { breakpoint, Button, PrimaryButton, white, grey, violet, alignPadding, desktop } from '../Styles';
import MediaQuery from 'react-responsive';
import { Close, Burger } from './Icons';
import { NavLinks } from './NavLinks';

const Nav = styled.div`
    padding: 0 ${alignPadding};
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    .logo {
        height: 10vh;
        display: flex;
        align-items: center;
        img {
            max-height: 5vh;
        }
    }
    
`
export const NavBar = () => {
    const [ user ] = useContext(UserContext);
    const { isAuth } = user;
    const [isMobNav, setIsMobNav] = useState(false);
    const toggleMobNav = () => isMobNav ? setIsMobNav(false) : setIsMobNav(true);
    return (
            <Nav>
                <Link className="logo" to="/"><img src={Logo} alt="Shortly"/></Link>
                <MediaQuery minDeviceWidth={breakpoint}>
                    <NavLinks isAuth={isAuth}/>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={breakpoint}>
                    { isMobNav && <NavLinks isAuth={isAuth} setIsMobNav={setIsMobNav}/> }
                </MediaQuery>
                <MediaQuery maxDeviceWidth={breakpoint}>
                    <div onClick={toggleMobNav}>
                        { isMobNav ? <Close/> : <Burger/> }
                    </div>
                </MediaQuery>
            </Nav>
    );
}

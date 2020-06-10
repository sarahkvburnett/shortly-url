import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import styled from 'styled-components';
import { breakpoint, Button, PrimaryButton, white, grey } from '../Styles';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
    width: 100vw;
    height: 10vh;
    padding: 0 8vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    @media (min-width: ${breakpoint}) {
        padding: 0vh 8vw;
    }
`
const NavBtn = styled(Button)`
    margin: 1vw;
`

const MobNavContainer = styled.div`
    height: 60vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: ${white};
`
const MobNav = styled.div`
    height: 100%;
    width: 80%;
    background: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    text-weight: bold;
    border-radius: 15px;
    button {
        color: ${white};
        font-size: larger;
    }
    hr{
        width: 75%;
        border-bottom: 1px solid ${grey};
        }
    }
    .signup {
        width: 75%;
        border-radius: 30px;
        padding: 2vh 2vw;
    }
`

export const NavBar = () => {
    const [ user, setUser ] = useContext(UserContext);
    const { isAuth } = user;
    const [isMobNav, setIsMobNav] = useState(false);
    const toggleMobNav = () => isMobNav ? setIsMobNav(false) : setIsMobNav(true);
    return (
        <nav>
            <Nav>
                <Link to="/"><img src={Logo} alt="Shortly"/></Link>
                <MediaQuery minDeviceWidth={breakpoint}>
                    <div style={{flexBasis: "50vw"}}>
                        <NavBtn>Features</NavBtn>
                        <NavBtn>Pricing</NavBtn>
                        <NavBtn>Resources</NavBtn>
                    </div>
                    <div>
                    { !isAuth && <NavBtn><Link to="/login">Login</Link></NavBtn> }
                    { !isAuth && <PrimaryButton><Link to="/signup">Sign Up</Link></PrimaryButton>}
                    { isAuth && <PrimaryButton><Link to="/logout">Logout</Link></PrimaryButton>}
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={breakpoint}>
                    <FontAwesomeIcon icon={faBars} style={{color: "hsl(0, 0%, 75%)"}} onClick={toggleMobNav}/>
                </MediaQuery>
            </Nav>
            {isMobNav && <MobNavContainer>
                <MobNav>
                    <NavBtn>Features</NavBtn>
                    <NavBtn>Pricing</NavBtn>
                    <NavBtn className="resources">Resources</NavBtn>
                    <hr/>
                    { !isAuth && <NavBtn><Link to="/login">Login</Link></NavBtn> }
                    { !isAuth && <PrimaryButton><Link to="/signup">Sign Up</Link></PrimaryButton>}
                    { isAuth && <PrimaryButton><Link to="/logout">Logout</Link></PrimaryButton>}
                </MobNav>
            </MobNavContainer>}
        </nav>
    );
}

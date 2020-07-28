import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, PrimaryButton, white, grey, violet, desktop } from './Styles';
import { useUser } from '../hooks/useUser';

const Links = styled.div`
    display: flex;
    @media (max-width: ${desktop}) {
        position: absolute;
        z-index: 101;
        top: 12vh;
        left: 3vw;
        height: 86vh;
        width: 94vw;
        flex-direction: column;
        background: ${violet};
        padding: 2vh 2vw;
        border-radius: 15px;
        .resourcesBtn:after {
            content: "";
            display: block;
            width: 70vw;
            margin: auto;
            height: 20px;
            border-bottom: 2px solid ${grey};
        }
        button {
            display: block;
            color: ${white};
            a {
                color: ${white};
            }
            margin: 5px 0;
        }
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        div:first-child {
            height: 60%;
        }
        div:nth-of-type(2) {
            button {
                width: 70vw;
                margin: 2vh;
                border-radius: 30px;
            }
        }
    }
    @media (min-width: ${desktop}){
        position: relative;
        flex-basis: 75vw;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        width: auto;
    }
`

const NavBtn = styled(Button)`
    margin: 1vw;
`

const NavLinks = ({setIsMobNav}) => {
    const { user: {isAuth} } = useUser();
    const closeMobNav = () => {
        if (setIsMobNav) setIsMobNav(false)
    };
    return (
        <Links onClick={closeMobNav}>
            <div>
                <NavBtn>Features</NavBtn>
                <NavBtn>Pricing</NavBtn>
                <NavBtn className="resourcesBtn">Resources</NavBtn>
            </div>
            <div>
                { !isAuth && <NavBtn><Link to="/login">Login</Link></NavBtn> }
                { !isAuth && <PrimaryButton><Link to="/signup">Sign Up</Link></PrimaryButton>}
                { isAuth && <PrimaryButton><Link to="/logout">Logout</Link></PrimaryButton>}
                </div>
        </Links>
    )
};

export default NavLinks;

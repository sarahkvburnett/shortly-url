import React from 'react';
import { rendersWithoutCrashing, matchesSnapshot } from '../../setupTests';
import Auth from '../Auth';
import { UserProvider } from '../../context/UserContext';
import { LinksProvider } from '../../context/LinksContext';
import { FlashProvider } from '../../context/FlashContext';
import { BrowserRouter as Router } from 'react-router-dom';

const AuthWrapper = (auth) => {
    return (
        <UserProvider>
            <LinksProvider>
                <FlashProvider>
                    <Router>
                        <Auth auth={auth}/>
                    </Router>
                </FlashProvider>
            </LinksProvider>
        </UserProvider>
    )
};

const LoginAuth = () => AuthWrapper("login");
const LogoutAuth = () => AuthWrapper("logout");
const SignupAuth = () => AuthWrapper("signup");

it('renders login without crashing', () => rendersWithoutCrashing(LoginAuth));
it('renders logout without crashing', () => rendersWithoutCrashing(LogoutAuth));
it('renders signup without crashing', () => rendersWithoutCrashing(SignupAuth));

it('login matches snapshot', () => matchesSnapshot(LoginAuth));
it('logout matches snapshot', () => matchesSnapshot(LogoutAuth));
it('signup matches snapshot', () => matchesSnapshot(SignupAuth));


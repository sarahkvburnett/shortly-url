import React from 'react';
import ReactDOM from 'react-dom';
import Logout from '../Logout';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../../../context/UserContext';
import { LinksProvider } from '../../../context/LinksContext';
import { FlashProvider } from '../../../context/FlashContext';

const LogoutWrapper = () => {
    return (
        <UserProvider>
            <LinksProvider>
                <FlashProvider>
                        <Router>
                        <Logout/>
                        </Router>
                </FlashProvider>
            </LinksProvider>
        </UserProvider>
    )
}

it('renders logout without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoutWrapper/>, div);
})

it('logout matches snapshot', () => {
    const tree = renderer.create(<LogoutWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
})

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavLinks from '../NavLinks';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { UserContext } from '../../context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

const NavLinksWrapper = ({isAuth = false}) => {
    const [ user, setUser] = useState({isAuth});
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <NavLinks/>
            </Router>
        </UserContext.Provider>
    )
}

it('renders NavLinks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLinksWrapper/>, div);
})

it('renders not-authenticated nav links correctly', () => {
    const { getByTestId } = render(<NavLinksWrapper/>);
    expect(getByTestId('authBtns').childNodes.length).toBe(2);
});

it('nav links not-authenticated matches snapshot', () => {
    const tree = renderer.create(<NavLinksWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders authenticated nav links correctly', () => {
    const { getByTestId } = render(<NavLinksWrapper isAuth/>);
    expect(getByTestId('authBtns').childNodes.length).toBe(1);
});

it('nav links authenticated matches snapshot', () => {
    const tree = renderer.create(<NavLinksWrapper isAuth/>).toJSON();
    expect(tree).toMatchSnapshot();
})
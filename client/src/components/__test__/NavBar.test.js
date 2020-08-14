import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

const NavBarWrapper = () => <Router><NavBar/></Router>

it('renders NavLinks without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBarWrapper/>, div);
})

it('renders nav bar correctly', () => {
    const { getByTestId } = render(<NavBarWrapper/>);
});

//TODO: add check for media query ??

it('nav bar matches snapshot', () => {
    const tree = renderer.create(<NavBarWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
})

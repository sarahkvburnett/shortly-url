import React from 'react';
import ReactDOM from 'react-dom';
import Boost from '../Boost';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders boost without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Boost/>, div);
})

it('renders boost correctly', () => {
    const { getByRole } = render(<Boost/>);
    expect(getByRole('heading').textContent).toBe('Boost your links today')
    expect(getByRole('button').textContent).toBe('Get Started');
});

it('boost matches snapshot', () => {
    const tree = renderer.create(<Boost/>).toJSON();
    expect(tree).toMatchSnapshot();
})
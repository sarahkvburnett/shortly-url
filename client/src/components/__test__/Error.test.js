import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../Error';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders error without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Error/>, div);
});


it('error matches snapshot', () => {
    const tree = renderer.create(<Error/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders error correctly', () => {
    const { getByTestId } = render(<Error error="I am error"/>);
    expect(getByTestId('error').textContent).toContain('I am error')
});

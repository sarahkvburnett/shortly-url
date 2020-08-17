import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DashNone from '../DashNone';

it('renders dash load without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashNone/>, div);
});

it('dash load matches snapshot', () => {
    const tree = renderer.create(<DashNone/>).toJSON();
    expect(tree).toMatchSnapshot();
});

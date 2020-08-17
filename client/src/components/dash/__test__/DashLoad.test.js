import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DashLoad from '../DashLoad';
import { UserProvider } from '../../../context/UserContext';
import { LinksProvider } from '../../../context/LinksContext';
import { ActiveLinkProvider } from '../../../context/ActiveLinkContext';

const DashLoadWrapper = () => {
    return (
        <UserProvider>
            <LinksProvider>
                <ActiveLinkProvider>
                    <DashLoad/>
                </ActiveLinkProvider>
            </LinksProvider>
        </UserProvider>
    )
}

it('renders dash load without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashLoadWrapper/>, div);
});

it('dash load matches snapshot', () => {
    const tree = renderer.create(<DashLoadWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
});

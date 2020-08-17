import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, screen, waitForElement } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import renderer from 'react-test-renderer';
import { UserProvider } from './context/UserContext';
import { LinksProvider } from './context/LinksContext';
import { ActiveLinkProvider } from './context/ActiveLinkContext';
import { ProcessLinkProvider } from './context/ProcessLinkContext';
import { FlashProvider } from './context/FlashContext';
import App from './App';

export const ComponentWrapper = (Component) => {
    return (
        <UserProvider>
            <LinksProvider>
                <ActiveLinkProvider>
                    <ProcessLinkProvider>
                        <FlashProvider>
                            <Component/>
                        </FlashProvider>
                    </ProcessLinkProvider>
                </ActiveLinkProvider>
            </LinksProvider>
        </UserProvider>
    )
}

export const rendersWithoutCrashing = (Component) => {
    const div = document.createElement('div');
    ReactDOM.render(<Component/>, div);
}

export const matchesSnapshot = (Component) => {
    const tree = renderer.create(<Component/>).toJSON();
    expect(tree).toMatchSnapshot();
}

export const sampleLinks = [
    {
        "date":"2020-08-14T17:29:53.041Z",
        "click":[
            {"date":1597426302926},
            {"date":1597426306071},
            {"date":1597426310231},
            {"date":1597426314763},
            {"date":1597428206995},
            {"date":1597428210093},
            {"date":1597428215131},
            {"date":1597428218755}
        ],
        "_id":"K1pjMCK-F",
        "full":"http://reactcommunity.org/react-transition-group/css-transition",
        "userId":"5ebe7d235e4a501ee8699058",
        "short":"octopus","__v":8
    },
    {
        "date":"2020-08-14T17:33:55.748Z",
        "click":[],
        "_id":"lsncCe5RV",
        "full":"https://ba-grant.netlify.app/",
        "userId":"5ebe7d235e4a501ee8699058",
        "short":"bagrant","__v":0
    }
];

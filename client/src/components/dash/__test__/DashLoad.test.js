import React from 'react';
import { rendersWithoutCrashing, matchesSnapshot } from '../../../setupTests';
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

it('renders dash load without crashing', () => rendersWithoutCrashing(DashLoadWrapper));

it('dash load matches snapshot', () => matchesSnapshot(DashLoadWrapper));

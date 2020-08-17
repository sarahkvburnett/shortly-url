import React, { useState } from 'react';
import Graph from '../Graph';
import { cleanup } from '@testing-library/react';
import { ActiveLinkContext } from '../../../context/ActiveLinkContext';
import { rendersWithoutCrashing, matchesSnapshot, sampleLinks } from '../../../setupTests';

afterEach(cleanup);

const GraphWrapper = () => {
    const sampleLink = sampleLinks[0];
    const [ activeLink, setActiveLink] = useState(sampleLink);
    return (
        <ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
            <Graph/>
        </ActiveLinkContext.Provider>
    )
}

it('renders graph without crashing', () => rendersWithoutCrashing(GraphWrapper));

it('graph matches snapshot', () => matchesSnapshot(GraphWrapper));

//TODO: test graph functioning

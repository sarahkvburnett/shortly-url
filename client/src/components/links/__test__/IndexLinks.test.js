import React, { useState } from 'react'
import { rendersWithoutCrashing, matchesSnapshot, sampleLinks } from '../../../setupTests';
import IndexLinks from '../IndexLinks';
import { LinksContext } from '../../../context/LinksContext';
import { render, screen } from '@testing-library/react';

const IndexLinksWrapper = () => {
    const [ links, setLinks ] = useState(sampleLinks);
    return (
        <LinksContext.Provider value={[links, setLinks]}>
            <IndexLinks/>
        </LinksContext.Provider>
    )
};

it('renders index links without crashing', () => rendersWithoutCrashing(IndexLinksWrapper));

it('index links matches snapshot', () => matchesSnapshot(IndexLinksWrapper));

it('renders link for each link', () => {
    render(<IndexLinksWrapper/>);
    expect(screen.getAllByTestId('link').length).toBe(2);
});
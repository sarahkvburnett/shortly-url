import React, { useState, useContext, useEffect } from 'react';
import { LinksContext } from '../context/LinksContext';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import styled from 'styled-components';
import { DashLoad } from '../components/DashLoad';
import { DashNone } from '../layout/DashNone';
import { Links } from '../components/DashLinks';
import { LinkShortener } from '../components/Shortener';
import { Graph } from '../components/Graph';
import { violet, grey } from '../Styles';
import { LinkUpdateContext } from '../context/LinkUpdateContext';
import { LinkEditor } from '../components/LinkEditor';
import { LinkDeletor } from '../components/LinkDeletor';

const Dash = styled.div`
    min-height: 70vh;
    background: ${grey};
    color: ${violet};
    h2 {
        text-align: center;
    }
`

export const Dashboard = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ loading, setLoading ] = useState(true);
    return (
        <Dash>
            {loading && <DashLoad setLoading={setLoading}/> }
            {!loading && links.length === 0 && <DashNone/> }
            {!loading && activeLink && <Graph loading={loading}/>}
            {!loading && <Links/> }
            { linkUpdate && linkUpdate.process === "edit" && <LinkEditor/> }
            { linkUpdate && linkUpdate.process === "delete" && <LinkDeletor/> }
            <LinkShortener position="0"/>
        </Dash>
    )
}
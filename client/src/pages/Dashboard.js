import React, { useState, useContext, useEffect } from 'react';
import { LinksContext } from '../context/LinksContext';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import styled from 'styled-components';
import { DashLoad } from '../components/dash/DashLoad';
import { DashNone } from '../components/dash/DashNone';
import { Links } from '../components/links/DashLinks';
import { LinkShortener } from '../components/linkcrud/LinkShortener';
import { Graph } from '../components/dash/Graph';
import { violet, grey } from '../Styles';
import { LinkUpdateContext } from '../context/LinkUpdateContext';
import { LinkCopier } from '../components/linkcrud/LinkCopier';
import { LinkEditor } from '../components/linkcrud/LinkEditor';
import { LinkDeletor } from '../components/linkcrud/LinkDeletor';

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
            { linkUpdate && linkUpdate.process === "copy" && <LinkCopier/> }
            { linkUpdate && linkUpdate.process === "edit" && <LinkEditor/> }
            { linkUpdate && linkUpdate.process === "delete" && <LinkDeletor/> }
            <LinkShortener position="0"/>
        </Dash>
    )
}
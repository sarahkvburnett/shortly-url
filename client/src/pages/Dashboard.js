import React, { useState, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { useLinks } from '../hooks/useLinks';
import { useProcessLink } from '../hooks/useProcessLink';
import { violet, grey } from '../components/Styles';
import DashNone from '../components/dash/DashNone';
import DashLoad from '../components/dash/DashLoad';
import DashLinks from '../components/links/DashLinks';
import Graph from '../components/dash/Graph';
const LinkCopier = lazy(() => import('../components/linkcrud/LinkCopier'));
const LinkEditor = lazy(() => import('../components/linkcrud/LinkEditor'));
const LinkDeletor = lazy(() => import('../components/linkcrud/LinkDeletor'));
const LinkShortener = lazy(() => import('../components/linkcrud/LinkShortener'));

const Dash = styled.div`
    min-height: 70vh;
    background: ${grey};
    color: ${violet};
    h2 {
        text-align: center;
    }
`

const Dashboard = () => {
    const { links } = useLinks();
    const { processLink: {process} } = useProcessLink();
    const [ loading, setLoading ] = useState(true);
    return (
        <Dash data-testid="dashboard">
            {loading && <DashLoad setLoading={setLoading}/> }
            {!loading && 
            <>
                {links.length > 0 ? <Graph/> : <DashNone/> }
            </>}
            <Suspense fallback={<div/>}>
                { !loading && links.length > 0 && <DashLinks/> }
                { process === "copy" && <LinkCopier/> }
                { process === "edit" && <LinkEditor/> }
                { process === "delete" && <LinkDeletor/> }
                <LinkShortener position="0"/>
            </Suspense>
        </Dash>
    )
};

export default Dashboard;
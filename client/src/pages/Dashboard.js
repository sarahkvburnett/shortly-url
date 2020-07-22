import React, { useState } from 'react';
import styled from 'styled-components';
import { DashLoad } from '../components/dash/DashLoad';
import { DashNone } from '../components/dash/DashNone';
import { Links } from '../components/links/DashLinks';
import { LinkShortener } from '../components/linkcrud/LinkShortener';
import { Graph } from '../components/dash/Graph';
import { violet, grey } from '../Styles';
import { LinkCopier } from '../components/linkcrud/LinkCopier';
import { LinkEditor } from '../components/linkcrud/LinkEditor';
import { LinkDeletor } from '../components/linkcrud/LinkDeletor';
import { useLinks } from '../hooks/useLinks';
import { useProcessLink } from '../hooks/useProcessLink';
import { useActiveLink } from '../hooks/useActiveLink';

const Dash = styled.div`
    min-height: 70vh;
    background: ${grey};
    color: ${violet};
    h2 {
        text-align: center;
    }
`

export const Dashboard = () => {
    const { links } = useLinks();
    const { processLink } = useProcessLink();
    const { activeLink } = useActiveLink();
    const [ loading, setLoading ] = useState(true);
    return (
        <Dash>
            {loading && <DashLoad setLoading={setLoading}/> }
            {!loading && links.length === 0 && <DashNone/> }
            {!loading && activeLink && <Graph loading={loading}/>}
            {!loading && <Links/> }
            { processLink.process === "copy" && <LinkCopier/> }
            { processLink.process === "edit" && <LinkEditor/> }
            { processLink.process === "delete" && <LinkDeletor/> }
            <LinkShortener position="0"/>
        </Dash>
    )
}
import React, { useState, useContext, useEffect } from 'react';
import { LinksContext } from '../context/LinksContext';
import { UserContext } from '../context/UserContext';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import styled from 'styled-components';
import { Links } from '../components/DashLinks';
import { LinkShortener } from '../components/Shortener';
import { DashLoad } from '../layout/DashLoad';
import { Graph } from '../components/Graph';
import { cyan, violet, darkViolet, grey, white } from '../Styles';
import axios from 'axios';
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

const Name = styled.span`
    color: ${cyan};
`

export const Dashboard = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ user, setUser ] = useContext(UserContext);
    const [ activeLink, setActiveLink] = useContext(ActiveLinkContext);
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ loading, setLoading ] = useState(true);

    const getUserLinks = () => {
        axios.get(`/api/links/${user.id}`)
        .then( res => {setLinks(res.data); setActiveLink(res.data[0]); setLoading(false)})
        .catch( err => setLinks('Links not found'))
    }

    useEffect( () => getUserLinks(), []);
    
    return (
        <Dash>
            {loading && <DashLoad/> }
            {!loading && <Graph loading={loading}/>}
            {!loading && <Links/> }
            { linkUpdate && linkUpdate.process === "edit" && <LinkEditor/> }
            { linkUpdate && linkUpdate.process === "delete" && <LinkDeletor/> }
            <LinkShortener position="0"/>
        </Dash>
    )
}
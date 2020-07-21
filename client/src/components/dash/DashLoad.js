import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LinksContext } from '../../context/LinksContext';
import { UserContext } from '../../context/UserContext';
import { ActiveLinkContext } from '../../context/ActiveLinkContext';
import { darkViolet, cyan, grey, Load } from '../../Styles';
import axios from 'axios';

const LoadIcon = styled.div`
    @keyframes spin {
        0% { transform: rotate(0deg)}
        100% { transform: rotate(360deg)}
    }
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 8px solid ${grey};
    border-top: 8px solid ${cyan};
    animation: spin 2s linear infinite;
`
export const DashLoad = ({setLoading}) => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ user, setUser ] = useContext(UserContext);
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const getUserLinks = () => {
        axios.get(`/api/links/${user.id}`)
        .then( res => {setLinks(res.data); setActiveLink(res.data[0]); setLoading(false)})
        .catch( err => setLoading(false))
    }
    useEffect( () => getUserLinks(), []);
    return (
        <Load>
            <p>Fetching Links...</p>
            <LoadIcon/>
        </Load>

    )
};

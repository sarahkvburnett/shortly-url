import React, { useEffect } from 'react';
import styled from 'styled-components';
import { cyan, grey, Load, LoadIcon } from '../Styles';
import axios from 'axios';
import { useActiveLink } from '../../hooks/useActiveLink';
import { useUser } from '../../hooks/useUser';
import { useLinks } from '../../hooks/useLinks';

const DashLoad = ({setLoading}) => {
    const { setLinksFromDB } = useLinks();
    const { user } = useUser();
    const { setActiveLink } = useActiveLink();
    const getUserLinks = () => {
        axios.get(`/api/links/${user.id}`)
        .then( res => {
            setLinksFromDB(res.data); 
            setActiveLink(res.data[0]); 
            setLoading(false)
        })
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

export default DashLoad;
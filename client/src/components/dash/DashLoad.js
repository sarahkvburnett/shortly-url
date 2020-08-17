import React, { useEffect } from 'react';
import axios from 'axios';
import { Load, LoadIcon } from '../Styles';
import { useActiveLink } from '../../hooks/useActiveLink';
import { useUser } from '../../hooks/useUser';
import { useLinks } from '../../hooks/useLinks';

const DashLoad = ({setLoading}) => {
    const { setLinksFromDB } = useLinks();
    const { user } = useUser();
    const { updateActiveLink } = useActiveLink();
    useEffect( () => {
            axios.get(`/api/links/${user.id}`)
            .then( res => {
                setLinksFromDB(res.data); 
                updateActiveLink(res.data[0]); 
                setLoading(false)
            })
            .catch( err => setLoading(false))
    },[]);
    return (
        <Load>
            <p>Fetching Links...</p>
            <LoadIcon/>
        </Load>

    )
};

export default DashLoad;
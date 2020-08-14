import React, { useEffect } from 'react';
import axios from 'axios';
import { Load, LoadIcon } from '../Styles';
import { useActiveLink } from '../../hooks/useActiveLink';
import { useUser } from '../../hooks/useUser';
import { useLinks } from '../../hooks/useLinks';
import { addLocalStorage } from '../../utilities/setLocalStorage';

const DashLoad = ({setLoading}) => {
    const { setLinksFromDB, setLinksFromBrowser } = useLinks();
    const { user } = useUser();
    const { setActiveLink } = useActiveLink();
    // load links from local storage if present otherwise get from db;
    useEffect( () => {
            axios.get(`/api/links/${user.id}`)
            .then( res => {
                setLinksFromDB(res.data); 
                setActiveLink(res.data[0]); 
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
import React from 'react';
import { useLinks } from '../../hooks/useLinks';
import Link from './DashLink';

const DashLinks = () => {
    const { links } = useLinks();
    return (
        <div>
            { 
            links.map( (link) => <Link key={link._id} link={link}/> )
            }
        </div>
    )
};

export default DashLinks;
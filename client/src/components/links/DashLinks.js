import React from 'react';
import { useLinks } from '../../hooks/useLinks';
import styled from 'styled-components';
import { grey, white, violet, breakpoint } from '../../Styles';
import Link from './DashLink';

const LinksBg = styled.div`
    width: 100vw;
`


export const Links = () => {
    const { links } = useLinks();
    return (
        <LinksBg>
            { 
            links.map( (link) => <Link key={link._id} link={link}/> )
            }
        </LinksBg>
    )
}

import React, { useContext } from 'react';
import { LinksContext } from '../../context/LinksContext';
import styled from 'styled-components';
import { grey, white, violet, breakpoint } from '../../Styles';
import { ActiveLinkContext } from '../../context/ActiveLinkContext';
import Link from './DashLink';

const LinksBg = styled.div`
    background: ${grey};
    width: 100vw;
`


export const Links = () => {
    const [ links ] = useContext(LinksContext);
    return (
        <LinksBg>
            { 
            links.map( (link) => <Link key={link._id} link={link}/> )
            }
        </LinksBg>
    )
}

import React, { useState, useContext } from 'react';
import { Button, PrimaryButton, LinkModal, Error } from '../../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LinksContext } from '../../context/LinksContext';
import { LinkUpdateContext } from '../../context/LinkUpdateContext';
import axios from 'axios';
import { shortlyUrl } from '../../utilities/url';

export const LinkDeletor = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ error, setError ] = useState();
    const { link } = linkUpdate;

    const deleteLink = (event) => {
        event.preventDefault();
        axios.delete(`/api/links/${link._id}`)
        .then( res => {setLinkUpdate(''); setLinks(prev => prev.filter( link => link !== linkUpdate.link ))})
        .catch( err => setError('Delete failed, please try again'));
    }
    
    return (
            <LinkModal onSubmit={event => deleteLink(event)}>
                <h3>Delete Shortly Link</h3>
                <p>{link.full}</p>
                <p>{shortlyUrl + link.short}</p>
                { error && <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                <PrimaryButton id="delete">Delete</PrimaryButton>
                <Button type="button" onClick={() => setLinkUpdate('')}>Cancel</Button>
            </LinkModal> 
    )
}

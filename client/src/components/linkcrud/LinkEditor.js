import React, { useState, useContext } from 'react';
import { Button, PrimaryButton, LinkModal, Error } from '../../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LinkUpdateContext } from '../../context/LinkUpdateContext';
import { LinksContext } from '../../context/LinksContext';
import axios from 'axios';
import { shortlyUrl } from '../../utilities/url';

export const LinkEditor = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ newLink, setNewLink ] = useState(linkUpdate.link.short);
    const [ error, setError ] = useState();
    const handleChange = (event) => {
        setError(null);
        setNewLink(event.target.value);
    };
    const updateLink = (event) => {
        event.preventDefault();
        const {link} = linkUpdate;
        if (newLink === link._id) setError('Url same as existing');
        link.short = newLink;
        axios.put(`/api/links/${link._id}`, link)
        .then( res => {
                setLinkUpdate(''); 
                setLinks( prev => prev.map( prevLink => {
                    return prevLink._id === link._id ? {...prevLink, short: link.short} : {...prevLink}
                }))
        })
        .catch( err => setError('Update failed, please try again'));
    }
    return (
            <LinkModal onSubmit={(event) => updateLink(event)}>
                    <h3>Edit Shortly Link</h3>
                    <p>{linkUpdate.link.full}</p>
                    <div style={{display: "flex"}}>
                        <p>{shortlyUrl}</p>
                        <input onChange={handleChange} value={newLink} required pattern="^[a-z0-9_-]{3,16}$" title="Letters and numbers between 3-16 characters"/>
                    </div>
                    { error && <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                    <PrimaryButton id="update">Update</PrimaryButton>
                    <Button type="button" onClick={() => setLinkUpdate('')}>Cancel</Button>
            </LinkModal> 
    )
}

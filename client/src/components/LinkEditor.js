import React, { useState, useContext } from 'react';
import { Button, PrimaryButton, LinkModal, Error } from '../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LinkUpdateContext } from '../context/LinkUpdateContext';
import { LinksContext } from '../context/LinksContext';
import axios from 'axios';

export const LinkEditor = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ newLink, setNewLink ] = useState(linkUpdate.link.short);
    const [ error, setError ] = useState();
    const handleChange = (event) => {
        setNewLink(event.target.value);
        setError(null);
    };
    const updateLink = (event) => {
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
            <LinkModal>
                <h3>Edit Shortly Link</h3>
                <p>{linkUpdate.link.full}</p>
                <div style={{display: "flex"}}>
                    <p>https://shortly/</p>
                    <input onChange={handleChange} value={newLink}/>
                </div>
                { error && <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                <PrimaryButton id="update" type="button" onClick={() => updateLink()}>Update</PrimaryButton>
                <Button type="button" onClick={() => setLinkUpdate('')}>Cancel</Button>
            </LinkModal> 
    )
}

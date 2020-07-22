import React, { useState } from 'react';
import { PrimaryButton, LinkModal } from '../../Styles';
import axios from 'axios';
import { shortlyUrl } from '../../utilities/url';
import { Error } from '../../layout/Error';
import { CloseButton } from './CloseButton';
import { useProcessLink } from '../../hooks/useProcessLink';
import { useLinks } from '../../hooks/useLinks';

export const LinkEditor = () => {
    const { updateLinkinLinks } = useLinks();
    const { processLink: {link, link: {_id, full, short}}, setProcessNull } = useProcessLink();
    const [ newShortLink, setNewShortLink ] = useState(short);
    const [ error, setError ] = useState();
    const handleChange = (event) => {
        setError(null);
        setNewShortLink(event.target.value);
    };
    const updateState = (newLink) => {
        setProcessNull(); 
        updateLinkinLinks(newLink);
    }
    const updateLink = (event) => {
        event.preventDefault();
        if (newShortLink === short) return setError('Url same as existing');
        const newLink = {...link, short: newShortLink};
        axios.put(`/api/links/${_id}`, newLink)
        .then( res => updateState(newLink))            
        .catch( err => setError('Update failed, please try again'));
    }
    return (
            <LinkModal onSubmit={(event) => updateLink(event)}>
                    <h3>Edit Shortly Link</h3>
                    <p>{full}</p>
                    <div style={{display: "flex"}}>
                        <p>{shortlyUrl}</p>
                        <input onChange={handleChange} value={newShortLink} required pattern="^[a-z0-9_-]{3,16}$" title="Letters and numbers between 3-16 characters"/>
                    </div>
                    { error && <Error error={error}/> }
                    <PrimaryButton id="update">Update</PrimaryButton>
                    <CloseButton/>
            </LinkModal> 
    )
}

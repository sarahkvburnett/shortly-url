import React, { useState } from 'react';
import { PrimaryButton, LinkModal } from '../Styles';
import axios from 'axios';
import { shortlyUrl } from '../../utilities/urls';
import Error from '../Error';
import CloseButton from './CloseButton';
import { useProcessLink } from '../../hooks/useProcessLink';
import { useLinks } from '../../hooks/useLinks';
import { useFlash } from '../../hooks/useFlash';

const LinkEditor = () => {
    const { updateLinkInLinks } = useLinks();
    const { processLink: {link, link: {_id, full, short}}, setProcessNull } = useProcessLink();
    const [ newShortLink, setNewShortLink ] = useState(short);
    const { showFlash } = useFlash();
    const [ error, setError ] = useState();
    const handleChange = (event) => {
        setError(null);
        setNewShortLink(event.target.value);
    };
    const updateLink = (event) => {
        event.preventDefault();
        if (newShortLink === short) return setError('Url same as existing');
        const newLink = {...link, short: newShortLink};
        axios.put(`/api/links/${_id}`, newLink)
        .then( () => {
            updateLinkInLinks(newLink);
            showFlash('Link updated');
            setProcessNull(); 
        })            
        .catch( () => setError('Update failed, please try again'));
    }
    return (
            <LinkModal onSubmit={(event) => updateLink(event)}>
                    <h3>Edit Shortly Link</h3>
                    <p>{full}</p>
                    <div style={{display: "flex"}}>
                        <p>{shortlyUrl}</p>
                        <input 
                            onChange={handleChange} 
                            value={newShortLink || ''} 
                            required 
                            pattern="^[a-z0-9_-]{3,16}$" 
                            title="Letters and numbers between 3-16 characters"
                            data-testid="input"
                        />
                    </div>
                    { error && <Error error={error}/> }
                    <PrimaryButton id="update" data-testid="button">Update</PrimaryButton>
                    <CloseButton/>
            </LinkModal> 
    )
};

export default LinkEditor;

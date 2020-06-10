import React, { useState, useContext, useEffect } from 'react'
import { LinksContext } from '../context/LinksContext';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

export const LinkForm = () => {
    const [ user ] = useContext(UserContext);
    const [ links, setLinks ] = useContext(LinksContext);
    const [ link, setLink ] = useState('');
    const [ linkValid, setLinkValid ] = useState(true);
    const [ error, setError ] = useState('');

    const handleChange = (event) => {
        event.persist();
        setLink(event.target.value);
        if (event.target.validity.valid) setLinkValid(true)
        else {setLinkValid(false); setError('Please enter a link')}
    };

    const addLink = (event) => {
        event.preventDefault();
        setLink('');
        const params = {
            "full": link,
        };
        if (user.id) params.userId = user.id;
        axios.post('api/links', params)
            .then( ({data}) => {
                console.log(data, data[0]);
                const newLinks = [...links, {_id: data[0]._id, full: data[0].full, date: data[0].date, click: data[0].click}];
                setLinks(newLinks);
                if (!user.id) localStorage.setItem('shortlyLinks', JSON.stringify(newLinks));   
            })
            .catch( error => setError('Error! Please try again') )
    };
    return (
        <form onSubmit={(event, link) => addLink(event, link)}>
                <label htmlFor="link" style={{display: "none"}}>Website Url</label>
                <input className="linkInput" id="link" name="link" type="text" placeholder="Shorten a link here..." onChange={handleChange} value={link} required/>
                <input className="linkSubmitBtn" type="submit" value="Shorten It!"/>
                { error !== '' && <p className="error"><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</p>}
        </form>
    )
}
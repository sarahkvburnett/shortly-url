import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { grey, red, cyan, white, violet, darkViolet, Button, PrimaryButton } from '../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import { LinkUpdateContext } from '../context/LinkUpdateContext';

const EditLink = styled.div`
    position: fixed;
    top: 25vh;
    left: 25vw;
    padding: 1vh 1vw;
    background: ${violet};
    border: 1px solid ${darkViolet};
    color: ${white};
    display: flex;
    flex-direction: column;
    opacity: 1 ;
    height: 50vh;
    width: 50vw;
    border-radius: 5px;
    h3 {
        text-align: center;
        margin: 2vh 0;
    }
    input, button {
        padding: 1vh 1vw;
        width: 100%;
        display: block;
        margin: 1vh 0;
        line-height: 1.5;
    }
    #update {
        background: ${cyan};
    }
    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1.5;
        margin: 1vh 0;
    }
`

const Error = styled.div`
    width: 100%;
    color: ${red};
    padding: 1vh 1vw;
    font-size: smaller;
`


export const LinkEditor = () => {
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const [ newLink, setNewLink ] = useState(linkUpdate._id);
    const [ error, setError ] = useState('Url already in use');
    const handleChange = (event) => {
        setNewLink(event.target.value);
    };
    return (
            <EditLink className="modalContent">
                <h3>Edit Shortly Link</h3>
                <p>{linkUpdate.link.full}</p>
                <input onChange={handleChange} value={newLink}/>
                { error !== '' && <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                <PrimaryButton id="update" type="button">Update</PrimaryButton>
                <Button type="button">Cancel</Button>
            </EditLink> 
    )
}

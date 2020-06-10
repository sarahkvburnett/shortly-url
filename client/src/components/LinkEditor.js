import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { grey, red, cyan, white, violet, darkViolet, Button, PrimaryButton, breakpoint } from '../Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import { LinkUpdateContext } from '../context/LinkUpdateContext';

const EditLink = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;   
    @media (min-width: ${breakpoint}) {
        top: 25vh;
        left: 25vw;
        height: 50vh;
        width: 50vw;   
    }
    padding: 1vh 1vw;
    background: ${violet};
    border: 1px solid ${darkViolet};
    color: ${white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 1 ;
    border-radius: 5px;
    h3 {
        text-align: center;
        margin: 2vh 0;
    }
    button {
        padding: 1vh 1vw;
        margin: 1vh 0;
        line-height: 1.5;
    }
    input {
        display: block;
        background: none;
        border: none;
        color: ${white};
        font-size: inherit;
        margin: 0 .5vw;
        padding: 0 .5vw;
        min-width: 5vw;
    }
    #update {
        background: ${cyan};
    }
    p {
        color: ${grey};
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
    const [ error, setError ] = useState('Url same as existing');
    const handleChange = (event) => {
        setNewLink(event.target.value);
    };
    return (
            <EditLink className="modalContent">
                <h3>Edit Shortly Link</h3>
                <p>{linkUpdate.link.full}</p>
                <div style={{display: "flex"}}>
                    <p>https://shortly/</p>
                    <input onChange={handleChange} value={newLink}/>
                </div>
                { error !== '' && <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> }
                <PrimaryButton id="update" type="button">Update</PrimaryButton>
                <Button type="button">Cancel</Button>
            </EditLink> 
    )
}

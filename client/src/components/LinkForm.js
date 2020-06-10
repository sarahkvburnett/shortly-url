import React, { useState, useContext, useEffect } from 'react'
import { LinksContext } from '../context/LinksContext';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styled from 'styled-components';
import { red, grey, cyan, white, breakpoint } from '../Styles';

const Form = styled.form`
    width: 70vw;
    margin: auto;
    padding: 1vh 1vw;
    @media (min-width: ${breakpoint}) {
        div {
            height: 10vh;
            display: flex;
        }
    }
}
`

const Input = styled.input`
    display: block;
    height: 10vh;
    width: 70vw;
    border-radius: 15px;
    padding: .5vw 1vw .5vw 1vw;
    margin: 1vh .5vw;
    border: none;
    &:invalid {
        border: 2px solid ${red};
    }
`
    
const Button = styled(Input)`
    font-weight: bold;
    background: ${cyan};
    border-radius: 15px;
    color: ${white};
    padding: 1vh 2vw;
    cursor: pointer;
    &:hover {
        color: ${white};
        opacity: 0.5;
    }
    @media (min-width: ${breakpoint}){
        flex-basis: 20%;
    }
`

const P = styled.p`
    text-align: center;
    width: 100%;
    padding: 1vh 1vw;
    margin: 2vh 0;
    color: ${grey};
    font-size: small;
    a {
        color: ${grey};
        &:hover {
            color: ${cyan};
        }
    }
`

const Error = styled(P)`
    color: ${red};
    font-size: smaller;
    font-style: italic;
    text-align: left;
`

export const LinkForm = () => {
    const [ user ] = useContext(UserContext);
    const [ links, setLinks ] = useContext(LinksContext);
    const [ link, setLink ] = useState('');
    const [ linkValid, setLinkValid ] = useState(true);
    const [ error, setError ] = useState('');

    const handleChange = (event) => {
        setError('');
        event.persist();
        setLink(event.target.value);
        if (event.target.validity.valid) setLinkValid(true)
        else {setLinkValid(false); setError('Please add a link')}
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
        <Form onSubmit={(event, link) => addLink(event, link)}>
                <label htmlFor="link" style={{display: "none"}}>Website Url</label>
                <div>
                <Input id="link" name="link" type="text" placeholder="Shorten a link here..." onChange={handleChange} value={link} required/>
                <Button type="submit" value="Shorten It!"/>
                </div>
                { error !== '' 
                ? <Error><FontAwesomeIcon icon={faExclamationTriangle}/> {error}</Error> 
                :  <P>By clicking SHORTEN you are agreeing to Shortly's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></P>
                }
        </Form>
    )
}
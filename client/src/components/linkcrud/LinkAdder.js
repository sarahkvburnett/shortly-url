import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';
import styled from 'styled-components';
import { red, grey, cyan, white, breakpoint } from '../Styles';
import Error from '../Error';
import { useUser } from '../../hooks/useUser';
import { useLinks } from '../../hooks/useLinks';

const Form = styled.form`
    margin: auto;
    padding: 1.5vh 1vw;
    height: 30vh;
    @media (max-width: ${breakpoint}) {
        input {
            width: 80vw;
            margin: 2vh 0;
        }
    }
    @media (min-width: ${breakpoint}) {
       width: 80vw;
       display: grid;
       padding: 9vh 2vw 0;
       grid-template-columns: 8fr 2fr;
       grid-template-rows: auto auto;
       grid-column-gap: 1.5vw;
       grid-template-areas: "link button" "error error";
       p {
           margin: 0;
       }
       input {
        height: 12vh;
       }
    }
    }
}
`

const Input = styled.input`
    display: block;
    border-radius: 5px;
    padding: 1vh 2vw;
    border: none;
    &:invalid {
        border: 2px solid ${red};
    }
    grid-area: link;
`
    
const Button = styled(Input)`
    font-weight: bold;
    background: ${cyan};
    color: ${white};
    padding: 1vh 2vw;
    cursor: pointer;
    &:hover {
        color: ${white};
        opacity: 0.5;
    }
    grid-area: button;
`

const P = styled.p`
    text-align: center;
    width: 100%;
    padding: 0 1vw;
    color: ${grey};
    font-size: small;
    a {
        color: ${grey};
        &:hover {
            color: ${cyan};
        }
    }
    grid-area: error;
    height: 3vh;
`

const LinkAdder = () => {
    const { user } = useUser();
    const { links, setLinks } = useLinks();
    const [ input, setInput ] = useState({value: "Shorten a link here... "});
    const [ error, setError ] = useState(false);
    const [ isSending, setIsSending ] = useState(false);
    const changeState = (value, valid, err) => {
        setInput({value: value, valid: valid});
        err ? setError("Please add a link") : setError(false);
    };
    const handleChange = (event) => {
        event.persist();
        setError('');
        const value = event.target.value;
        if (validator.isEmpty(value)) changeState(value, false, true) 
        else if (validator.isURL(value)) changeState(value, true, false);
        else changeState(value, false, false);
    };
    const addLink = (event) => {
        event.preventDefault();
        if (!input.valid) return setError('Please add a link');
        const params = {full: input.value};
        if (user.id) params.userId = user.id;
        setIsSending(true);
        axios.post('api/links', params)
            .then( ({data}) => {
                const newLinks = [...links, {_id: data[0]._id, full: data[0].full, short: data[0]._id, date: data[0].date, click: data[0].click}];
                if (!user.id) localStorage.setItem('shortlyLinks', JSON.stringify(newLinks));  
                setLinks(newLinks);
                setInput({value: ''});
                setIsSending(false);
            })
            .catch( error => {
                setError('Error! Please try again') ;
                setIsSending(false);
            })                 
    };
    return (
        <Form onSubmit={(event) => addLink(event)}>
                <label htmlFor="link" style={{display: "none"}}>Website Url</label>
                { error ? <Error error={error}/> : <P/> }
                <Input 
                    id="link" 
                    name="link" 
                    onChange={handleChange} 
                    value={input.value} 
                    required={input.value ===  "Shorten a link here..." ? false : true} 
                    onFocus={() => changeState("", false, true)}/> 
                <Button type="submit" value={isSending ? "Shortening..." : "Shorten It!"} disabled={isSending}/>
        </Form>
    )
};

export default LinkAdder;
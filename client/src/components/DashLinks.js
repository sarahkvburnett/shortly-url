import React, { useContext } from 'react';
import { LinksContext } from '../context/LinksContext';
import styled from 'styled-components';
import { grey, white, violet, breakpoint } from '../Styles';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import { DashLinkBtns } from '../components/DashLinkBtns';
import { shortlyUrl } from '../utilities/url';

const LinksBg = styled.div`
    background: ${grey};
    width: 100vw;
`

const Link = styled.div`
    max-width: 96vw;
    margin: 2vh 2vw;
    padding: 1vh 1vw;
    position: relative;
    overflow: hidden;
    @media (min-width: ${breakpoint}) {
        display: flex;
        align-items: flex-end;
    }
`

const URLS = styled.div`
    position: relative;
    h3, input {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    @media (min-width: ${breakpoint}) {
        width: 70%;
    }
`

const DETAILS = styled.div`
    font-size: small;
    @media (min-width: ${breakpoint}) {
        width: 30%;
        text-align: right;
    }
     @media (max-width: ${breakpoint}){
        border-top: 1px solid ${grey};
        margin-top: 1vh;
        padding-top: 1vh;
    } 
    span {
        font-size: larger;
        display: block;
        white-space: nowrap;
        margin-bottom: 1vh;
    }
}
`

const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    min-width: 50vw;
    &:hover + div {
        opacity: 1;
        pointer-events: all;
    }
`

const Urls = ({short, full, link}) => {
    return (
        <URLS className="urls">
            <h3>{full}</h3>
            <Input id={short} value={shortlyUrl + '/' + short} readOnly/>
            <DashLinkBtns link={link}/>
        </URLS>
    )
}

const Details = ({date, click, short}) => {
    return (
        <DETAILS className="details">
            <p>CREATED <span>{date.toString() && date.toString().substr(0,10)}</span></p>
            <p>CLICKS <span>{click.length}</span></p>
        </DETAILS>
    )
}


export const Links = () => {
    const [ links ] = useContext(LinksContext);
    const [ activeLink ] = useContext(ActiveLinkContext);
    const theme = (id) => {
        if (activeLink !== undefined ) {
            if (id === activeLink._id) return { color: white, background: violet} 
            else return { color: violet, background: white}
        }
        else {
            return { color: violet, background: white }
        }
    }
    return (
        <LinksBg>
            { 
            links.map( (link) => { 
                const { _id, date, full, click, short } = link;
                return <Link style={theme(_id)} key={_id}>
                    <Urls short={short} full={full} link={link}/>
                    <Details date={date} click={click}/>
                    </Link>
                }) 
            }
        </LinksBg>
    )
}
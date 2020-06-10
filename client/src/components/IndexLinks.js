import React, { useState, useEffect, useContext } from 'react'
import { LinksContext } from '../context/LinksContext';
import styled from 'styled-components'
import { FullLink } from './links/FullLink'
import { ShortLink } from './links/ShortLink'
import { LinkCopyButton } from './links/LinkCopyButton'
import { breakpoint } from '../Styles'

const LinkContainer = styled.div`
    position: relative;
    top: -15vh;
    width: 80vw;
    height: min-content;
    margin: auto;
    @media (min-width: ${breakpoint}) {
        top: -10vh;
    }
`

const Link = styled.div`
    min-height: 15vh;
    background: #FFF;
    width: 80vw;
    padding: 2vh 2vw;
    margin: 2vh 0 2vh 0;
    border-radius: 15px;
    @media (min-width: ${breakpoint}){
        display: flex;
        align-items: center;
        height: 10vh;
    }
`

export const Links = () => {
    const [ links, setLinks ] = useContext(LinksContext);
    const [ copiedLink, setCopiedLink ] = useState('');
    const copyToClipboard = (event, id) => {
        event.target.previousSibling.select()
        document.execCommand('copy')
        event.target.focus()
        setCopiedLink(id)
    };
    useEffect(() => {
        if (localStorage.shortlyLinks) setLinks(links => JSON.parse(localStorage.shortlyLinks))
    }, []);
    return( 
    <LinkContainer className="linkContainer">
        {
        links.map( ({_id, full}) => {
            return <Link key={_id} className="link">
                <FullLink fullUrl={full}/>
                <ShortLink shortUrl={_id}/>
                <LinkCopyButton id={_id} copyToClipboard={copyToClipboard} copiedLink={copiedLink}/>
            </Link> 
        })
        }
    </LinkContainer> 
    )
}

// <Link className="link" key={link[0]}><div className="fullLink">{link[1]}</div><ShortLink readOnly="readonly" className="shortLink" value={`https://rel.ink/${link[0]}`}><a href={`https://rel.ink/${link[0]}`}>{`https://rel.ink/${link[0]}`}</a></ShortLink><div className="button"><Button value={`https://rel.ink/${link[0]}`} onClick={copyToClipboard}>{copyButton}</Button></div></Link></LinkContainer>
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CopyShortLink } from './CopyShortLink'
import { LinkCopyButton } from './LinkCopyButton'
import { breakpoint, alignWidth, smallerWidth } from '../../Styles'
import { useCopyLink } from '../../hooks/useCopyLink';
import { useLinks } from '../../hooks/useLinks';

const LinkContainer = styled.div`
    position: relative;
    top: -15vh;
    width: ${alignWidth};
    height: min-content;
    margin: auto;
    @media (min-width: ${breakpoint}) {
        width: ${smallerWidth};
        top: -10vh;
    }
`

const Link = styled.div`
    min-height: 15vh;
    background: #FFF;
    width: ${alignWidth};
    padding: 2vh 2vw;
    margin: 2vh 0 2vh 0;
    border-radius: 15px;
    @media (min-width: ${breakpoint}){
        display: flex;
        align-items: center;
        height: 10vh;
        width: ${smallerWidth}
    }
`

const FullLink = styled.div`
    flex: 3;
    height: 5vh;
    line-height: 5vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: auto;
    hyphens: none;
    @media (min-width: ${breakpoint}) {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

 
export const Links = () => {
    const { links, setLinksfromBrowser } = useLinks();
    const { copiedLink, copyLink } = useCopyLink();
    useEffect(setLinksfromBrowser, []);
    console.log(links);
    return( 
    <LinkContainer className="linkContainer">
        {
        links.map( ({_id, full}) => {
            return <Link key={_id} className="link">
                <FullLink>{full}</FullLink>
                <CopyShortLink shortUrl={_id}/>
                <LinkCopyButton id={_id} copiedLink={copiedLink} copyLink={copyLink}/>
            </Link> 
        })
        }
    </LinkContainer> 
    )
}

// <Link className="link" key={link[0]}><div className="fullLink">{link[1]}</div><ShortLink readOnly="readonly" className="shortLink" value={`https://rel.ink/${link[0]}`}><a href={`https://rel.ink/${link[0]}`}>{`https://rel.ink/${link[0]}`}</a></ShortLink><div className="button"><Button value={`https://rel.ink/${link[0]}`} onClick={copyToClipboard}>{copyButton}</Button></div></Link></LinkContainer>
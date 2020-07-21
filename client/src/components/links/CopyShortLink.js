import React from 'react';
import styled from 'styled-components';
import { breakpoint, cyan } from '../../Styles';
import { shortlyUrl } from '../../utilities/url';

const ShortUrl = styled.input`
    flex: 2;
    color: ${cyan};
    display: block;
    border: none;
    width: 100%;
    height: 5vh;
    margin: 2vh 0 2vh 0;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    @media (min-width: ${breakpoint}) {
        text-align: right;
        margin: 0 2vw 0 2vw;
        width: auto;
    }
    overflow: hidden;
`

export const CopyShortLink = ({shortUrl}) => {
    return (
        <ShortUrl readOnly="readonly" className="shortLink" value={shortlyUrl + shortUrl}/>
    )
}
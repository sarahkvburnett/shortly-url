import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo} from './../images/logo.svg';
import { Facebook, Instagram, Pinterest, Twitter} from './Icons';
import { darkViolet, breakpoint, white, cyan, alignPadding } from './Styles';

const FooterContainer = styled.div`
    background: ${darkViolet};
    min-height: 20vh;
    width: 100vw;
    padding: 10vh 2vw;
    color: ${white};
    text-align: center;
    font-size: smaller;
    @media (min-width: ${breakpoint}){
        text-align: left; 
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 2fr repeat(4, 1fr);
        padding: 10vh ${alignPadding};
    }
    svg {
        path {
            fill: ${white};
        }
    }
    a {
        color: ${white};
        &:hover { 
            color: ${cyan}; 
        }
    }
`

const SiteLinks = styled.div` 
    margin: 2vh 0;
    font-size: 12px;
    ul li {
        list-style: none;
        line-height: 2.5;
        margin-bottom: 2vh;
    }
    h4 {
        line-height: 3.5;
        font-size: 14px;
    }
    @media (min-width: ${breakpoint}){
        margin: 0;
        ul li {
            line-height: 2;
            margin: 0;
        }
        h4 {
            line-height: inherit;
            margin-bottom: 2vh;
        }
    }
`

const SocialLinks = styled.div`
    margin-top: 10vh;
    align-self: flex-start;
    justify-self: center;
    a {
        font-size: 20px;
        margin: 0 10px;
    }
    svg:hover {
        path {
            fill: ${cyan};
        }
    }
    @media (min-width: ${breakpoint}){
        margin: 0;
        a {
           font-size: 16px;
           margin: 0 5px;
        }
    }
`
const footer = [
    {
        "title": "Features",
        "links": ["Link Shortening", "Branded Links", "Analytics"],
        "urls": ["/linkshortening", "/brandedlinks", "/analytics"]
    }, 
    {
        "title": "Resources",
        "links": ["Blog", "Developers", "Support"],
        "urls": ["/blog", "/developers", "/support"]
    }, 
    {
        "title": "Company",
        "links": ["About", "Our Team", "Careers", "Contact"],
        "urls": ["/about", "/team", "/careers", "/contact"]
    }]

const Footer = () => {
    return (
        <FooterContainer>
            <Logo title="Shortly"/>
            {
            footer.map(({title, links, urls}) => {
                return <SiteLinks key={title}>
                    <h4>{title}</h4>
                    <ul>
                       {links.map((link, index) => <li key={link}>
                           <a href={urls[index]}>
                               {link}
                            </a>
                        </li>)}
                    </ul>
                </SiteLinks>
            })
            }
            <SocialLinks>
                <a href="https://facebook.com"><Facebook/></a>              
                <a href="https://twitter.com"><Twitter/></a>
                <a href="https://pinterest.co.uk"><Pinterest/></a>
                <a href="https://instagram.com"><Instagram/></a>
            </SocialLinks>
        </FooterContainer>
    )
};

export default Footer;

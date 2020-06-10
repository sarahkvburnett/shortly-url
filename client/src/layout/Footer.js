import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { darkViolet, breakpoint, white, cyan } from '../Styles';

const FooterContainer = styled.div`
    background: ${darkViolet};
    min-height: 20vh;
    width: 100vw;
    padding: 2vh 2vw;
    color: ${white};
    @media (min-width: ${breakpoint}){
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(5, 1fr);
    }
    img {
        align-self: center;
    }
    .links {
        ul {
            list-style: none;
        }
    }
    .smIcons {
        align-self: center;
        justify-self: center;
    }
    a {
        color: ${white};
        &:hover { 
            color: ${cyan}; 
        }
    }
`

const Img = styled.img`
filter: invert(100%) sepia(4%) saturate(898%) hue-rotate(235deg) brightness(117%) contrast(100%);
`

const footer = [
    {"title": "Features",
     "links": ["Link Shortening", "Branded Links", "Analytics"]
    }, 
    {"title": "Resources",
    "links": ["Blog", "Developers", "Support"]
    }, 
    {"title": "Company",
     "links": ["About", "Our Team", "Careers", "Contact"]
    }]

const iconStyle = {
    margin: "0 1vw",
    fontSize: "larger",
}

export const Footer = () => {
    
    return (
        <FooterContainer>
            <Img src={Logo} alt="Shortly"/>
            {
            footer.map(({title, links}) => {
                return <div className="links" key={title}>
                    {title}
                    <ul>
                       {links.map(link => <li key={link} style={{fontSize: "smaller"}}>{link}</li>)}
                    </ul>
                </div>
            })
            }
            <div className="smIcons">
                <a href="https://facebook.com"><FontAwesomeIcon style={iconStyle} icon={faFacebook}/>  </a>              
                <a href="https://twitter.com"><FontAwesomeIcon style={iconStyle} icon={faTwitter}/></a>
                <a href="https://pinterest.co.uk"><FontAwesomeIcon style={iconStyle} icon={faPinterest}/></a>
                <a href="https://instagram.com"><FontAwesomeIcon style={iconStyle} icon={faInstagram}/></a>
            </div>
        </FooterContainer>
    )
}

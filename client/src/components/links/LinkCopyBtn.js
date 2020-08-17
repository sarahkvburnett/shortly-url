import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, violet, darkViolet } from '../Styles'

const Button = styled(PrimaryButton)`
    flex: 1;
    border-radius: 5px;
    padding: 1em;
    &:hover {
        background: ${violet};
    }
    width: 100%;
`

const DisabledButton = styled(Button)`
    background: ${darkViolet};
    &:hover {
        background: ${darkViolet};
        opacity: 1;
        cursor: auto;
    }
`

const LinkCopyButton = ({id, copiedLink, copyLink}) => {
    return (
        <>
        { copiedLink === id 
            ? <DisabledButton type="button" disabled>Copied</DisabledButton> 
            : <Button className="linkcopybtn" onClick={(event) => copyLink(event, id)}>Copy</Button> 
        }
        </>
    )
}

export default LinkCopyButton;
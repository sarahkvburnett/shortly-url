import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, violet, darkViolet } from '../../Styles'

const Button = styled(PrimaryButton)`
    flex: 1;
    border-radius: 5px;
    padding: 1em;
    &:hover {
        background: ${violet};
    }
    width: 76vw;
`

const DisabledButton = styled(Button)`
    background: ${darkViolet};
    &:hover {
        background: ${darkViolet};
        opacity: 1;
        cursor: auto;
    }
`

export const LinkCopyButton = ({id, copiedLink, copyLink}) => {
    return (
        <React.Fragment>
             { copiedLink !== id && <Button className="linkcopybtn" onClick={(event) => copyLink(event, id)}>Copy</Button> }
            { copiedLink === id && <DisabledButton type="button" disabled="true">Copied</DisabledButton> }
        </React.Fragment>
    )
}

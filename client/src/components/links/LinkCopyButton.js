import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, violet } from '../../Styles'

const Button = styled(PrimaryButton)`
    flex: 1;
    border-radius: 5px;
    padding: 1em;
    &:hover {
        background: ${violet};
    }
    width: 76vw;
`

export const LinkCopyButton = ({id, copyToClipboard, copiedLink}) => {
    return (
        <Button className="linkcopybtn" onClick={(event) => copyToClipboard(event, id)}>{copiedLink === id ? "Copied!" : "Copy"}</Button>
    )
}

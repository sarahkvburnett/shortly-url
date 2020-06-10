import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../Styles'

const FullUrl = styled.div`
    flex: 3;
    height: 5vh;
    line-height: 5vh;
    width: 76vw;
    overflow-y: auto;
    overflow-x: auto;
    hyphens: none;
    @media (min-width: ${breakpoint}) {
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const FullLink = ( {fullUrl }) => {
    return (
        <FullUrl className="fulllink">
            {fullUrl}
        </FullUrl>
    )
}

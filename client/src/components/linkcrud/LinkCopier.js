import React, { useContext } from 'react';
import { Button, PrimaryButton, LinkModal, darkViolet } from '../../Styles';
import { LinkUpdateContext } from '../../context/LinkUpdateContext';
import { useCopyLink } from '../../utilities/useCopyLink';
import styled from 'styled-components';
import { shortlyUrl } from '../../utilities/url';


const DeactivatedButton = styled(PrimaryButton)`
    background: ${darkViolet};
`

export const LinkCopier = () => {
    const [ linkUpdate, setLinkUpdate ] = useContext(LinkUpdateContext);
    const { link } = linkUpdate;
    const [ copiedLink, copyLink ] = useCopyLink();
    return (
            <LinkModal>
                    <h3>Copy Shortly Link</h3>
                    <input value={shortlyUrl + link.short} readOnly/>
                    { !copiedLink && <PrimaryButton type="button" id="copy" onClick={event => copyLink(event, false)}>Copy</PrimaryButton> }
                    { copiedLink && <DeactivatedButton type="button" id="copy" disabled>Copied</DeactivatedButton> }
                    <Button type="button" onClick={() => setLinkUpdate('')}>Close</Button>
            </LinkModal> 
    )
}

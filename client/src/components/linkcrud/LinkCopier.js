import React from 'react';
import { useCopyLink } from '../../hooks/useCopyLink';
import { shortlyUrl } from '../../utilities/url';
import { PrimaryButton, LinkModal } from '../Styles';
import CloseButton from './CloseButton';
import { useProcessLink } from '../../hooks/useProcessLink';

const LinkCopier = () => {
    const { processLink: {link: {short}} } = useProcessLink();
    const { copiedLink, copyLink } = useCopyLink();
    console.log(copiedLink);
    return (
            <LinkModal>
                    <h3>Copy Shortly Link</h3>
                    <input value={shortlyUrl + short} readOnly/>
                    { !copiedLink && <PrimaryButton type="button" id="copy" onClick={event => copyLink(event, true)}>Copy</PrimaryButton> }
                    { copiedLink && <PrimaryButton disabled>Copied</PrimaryButton> }
                    <CloseButton/>
            </LinkModal> 
    )
};

export default LinkCopier;

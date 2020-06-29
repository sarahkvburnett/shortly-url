import { useState } from 'react';

export const useCopyLink = () => {
    const [ copiedLink, setCopiedLink ] = useState(false);

    const copyLink = (event, newState) => {
        event.target.previousSibling.select();
        document.execCommand('copy');
        event.target.focus();
        setCopiedLink(newState);
    }
    
     return [copiedLink, copyLink];
}
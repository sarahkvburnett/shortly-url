import React from 'react';
import { Button } from '../../Styles';
import { useProcessLink } from '../../hooks/useProcessLink';


export const CloseButton = () => {
    const { setProcessNull } = useProcessLink();
    return (
        <Button type="button" onClick={setProcessNull}>Close</Button>
    )
}


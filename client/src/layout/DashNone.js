import React from 'react';
import { Load } from '../Styles';

export const DashNone = () => {
    console.log(Load);
    return (
        <Load>
            <h3>No Links found</h3>
            <p>Please add a link below</p>
            <p>Or refresh the page</p>
        </Load>
    )
}

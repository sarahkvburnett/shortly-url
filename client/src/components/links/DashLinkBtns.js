import React, { useContext } from 'react';
import styled from 'styled-components';
import  { tablet, red, cyan, grey, violet} from '../../Styles';
import { Edit, Copy, Trash } from '../../layout/Icons';
import { useProcessLink } from '../../hooks/useProcessLink';

const Buttons = styled.div`
    grid-area: buttons;
    background: ${violet};
    button {
        padding: 1vh 1vw;
        margin: 1vh 0;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        width: 94vw;
        display: block;
        font-size: larger;
    }
    @media (min-width: ${tablet}){
        font-size: smaller;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(3, 150px);
        line-spacing: inherit;
        button {
            width: auto;
            margin-right: 1vw;
        }
    }
    .copy, .select {
        background: ${grey};
    }
    .delete{
        background: ${red};
    }
    .edit {
        background: ${cyan};
    }
`

export const DashLinkBtns = ({link, showBtns}) => {
    const { setProcessCopy, setProcessDelete, setProcessEdit } = useProcessLink();
    return (
        <Buttons className="button">
            <button type="button" className="copy" onClick={() => setProcessCopy(link)}><Copy/></button>
            <button type="button" className="edit" onClick={() => setProcessEdit(link)}><Edit/></button>
            <button type="button" className="delete" onClick={() => setProcessDelete(link)}><Trash/></button>
        </Buttons>
    )
}

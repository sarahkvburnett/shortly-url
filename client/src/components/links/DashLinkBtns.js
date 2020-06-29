import React, { useContext } from 'react';
import styled from 'styled-components';
import  { tablet, red, cyan, grey, desktop, violet} from '../../Styles';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';
import { ActiveLinkContext } from '../../context/ActiveLinkContext';
import { LinkUpdateContext } from '../../context/LinkUpdateContext';

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
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const [ linkUpdate, setLinkUpdate] = useContext(LinkUpdateContext);
    const { _id } = link;
    const editLink = () => setLinkUpdate({
        process: "edit",
        link,
    });
    const deleteLink = () => setLinkUpdate({
        process: "delete",
        link,
    });
    const copyLink = () => setLinkUpdate({
        process: "copy",
        link,
    });
    return (
        <Buttons className="button">
            <button type="button" className="copy" onClick={copyLink} data-name="Copy"><FontAwesomeIcon icon={faCopy}/></button>
            <button type="button" className="edit" onClick={editLink} data-name="Edit"><FontAwesomeIcon icon={faEdit}/></button>
            <button type="button" className="delete" onClick={deleteLink} data-name="Delete"><FontAwesomeIcon icon={faTrash}/></button>
        </Buttons>
    )
}

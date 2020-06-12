import React, { useContext } from 'react';
import styled from 'styled-components';
import  { breakpoint, red, cyan, grey, white, violet} from '../Styles';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import { LinkUpdateContext } from '../context/LinkUpdateContext';

const Buttons = styled.div`
    @media (max-width: ${breakpoint}){
        left: 0;
        bottom: -20vh;
        position: absolute;
        background: ${white};
    }
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s ease-in;
    &:hover {
            opacity: 1;
            pointer-events: all;
        }
    }
    button {
        padding: 1vh 1vw;
        margin: 1vh .1vw;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        width: 94vw;
        display: block;
        @media (min-width: ${breakpoint}){
            width: auto;
            min-width: 6vw;
            display: inline;
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

export const DashLinkBtns = ({link}) => {
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const [ linkUpdate, setLinkUpdate] = useContext(LinkUpdateContext);
    const { _id } = link;
    const theme = (id) => {
        if (activeLink !== undefined ) {
            if (id === activeLink._id) return { background: violet} 
            else return { background: white}
        }
        else {
            return { background: white }
        }
    }
    const selectLink = () => setActiveLink(link);
    const editLink = () => setLinkUpdate({
        process: "edit",
        link,
    });
    const deleteLink = () => setLinkUpdate({
        process: "delete",
        link,
    });
    return (
        <React.Fragment>
            <Buttons className="button" style={theme(_id)}>
                <button type="button" className="select" onClick={selectLink} data-name="Select"><FontAwesomeIcon icon={faHandPointUp}/></button>
                <button type="button" className="edit" onClick={editLink} data-name="Edit"><FontAwesomeIcon icon={faEdit}/></button>
                <button type="button" className="delete" onClick={deleteLink} data-name="Delete"><FontAwesomeIcon icon={faTrash}/></button>
            </Buttons>
        </React.Fragment>
    )
}

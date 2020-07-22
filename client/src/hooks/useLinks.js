import { useContext } from 'react';
import { LinksContext } from '../context/LinksContext';

export const useLinks = () => {
    const [ links, setLinks ] = useContext(LinksContext);

    const setLinksfromBrowser = () => {
        if (localStorage.shortlyLinks) setLinks( () => JSON.parse(localStorage.shortlyLinks) )
    };

    const setLinksfromDB = () => {};

    const deleteLinkFromLinks = ({link}) => {
        setLinks ( prev => prev.filter( prevLink => prevLink._id !== link._id))
    };

    const updateLinkInLinks = ({_id, short}) => {
        setLinks( prev => prev.map( prevLink => {
            return prevLink._id === _id ? {...prevLink, short} : {...prevLink}
        }))
    };

    return {
        links,
        setLinks,
        setLinksfromBrowser,
        setLinksfromDB,
        deleteLinkFromLinks,
        updateLinkInLinks
    }
}

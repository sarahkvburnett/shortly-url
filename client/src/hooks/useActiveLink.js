import { useContext } from 'react';
import { ActiveLinkContext } from '../context/ActiveLinkContext';

export const useActiveLink = () => {
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
    const updateActiveLink = link => setActiveLink(link);
      return {
        activeLink, 
        updateActiveLink
    }
}

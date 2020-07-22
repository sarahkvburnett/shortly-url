import { useContext } from 'react';
import { ActiveLinkContext } from '../context/ActiveLinkContext';

export const useActiveLink = () => {
    const [ activeLink, setActiveLink ] = useContext(ActiveLinkContext);
      return {
        activeLink, 
        setActiveLink
    }
}

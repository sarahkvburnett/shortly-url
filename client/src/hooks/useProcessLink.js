import { useContext } from 'react'
import { ProcessLinkContext } from '../context/ProcessLinkContext';

export const useProcessLink = () => {
    const [ processLink, setProcessLink ] = useContext(ProcessLinkContext);
    const setProcessEdit = (link) => setProcessLink({
        process: "edit",
        link,
    });
    const setProcessDelete = (link) => setProcessLink({
        process: "delete",
        link,
    });
    const setProcessCopy = (link) => setProcessLink({
        process: "copy",
        link,
    });
    const setProcessNull = () => setProcessLink({
        process: null,
        link: []
    })
    return {
        processLink,
        setProcessEdit,
        setProcessDelete,
        setProcessCopy,
        setProcessNull
    }
}

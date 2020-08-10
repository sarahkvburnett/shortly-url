import { useContext } from 'react';
import { FlashContext } from '../context/FlashContext';

const useFlash = () => {
    const [ {flashMsg, isFlashVisible}, setFlash ] = useContext(FlashContext);
    const hideFlash = () => setFlash({visible: false, msg: ""});
    const showFlash = (msg) => setFlash({visible: true, msg});
    return {
        flashMsg,
        isFlashVisible,
        hideFlash,
        showFlash
    }
};

export default useFlash;
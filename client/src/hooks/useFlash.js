import { useContext } from 'react';
import { FlashContext } from '../context/FlashContext';

export const useFlash = () => {
    const [ {flashMsg, isFlashVisible, isAutoHideFlash}, setFlash ] = useContext(FlashContext);
    const hideFlash = () => setFlash({
        visible: false, 
        flashMsg: '',
    });
    const showFlash = (newFlashMsg, newIsAutoHideFlash = true) => setFlash({
        isFlashVisible: true, 
        flashMsg: newFlashMsg, 
        isAutoHideFlash: newIsAutoHideFlash
    });
    const autoHideFlash = () => setTimeout(hideFlash, 2500);
    const manualHideFlash = () => hideFlash();
    return {
        flashMsg,
        isFlashVisible,
        isAutoHideFlash,
        autoHideFlash,
        manualHideFlash,
        showFlash,
    }
};
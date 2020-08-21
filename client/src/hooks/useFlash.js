import { useContext } from "react";
import { FlashContext } from "../context/FlashContext";

export const useFlash = () => {
	const [{ flashMsg, isFlashVisible }, setFlash] = useContext(FlashContext);
	const hideFlash = () =>
		setFlash({
			visible: false,
			flashMsg: "",
		});
	const showFlash = (newFlashMsg) =>
		setFlash({
			isFlashVisible: true,
			flashMsg: newFlashMsg,
		});
	const autoHideFlash = () => setTimeout(hideFlash, 2000);
	return {
		flashMsg,
		isFlashVisible,
		autoHideFlash,
		showFlash
	};
};

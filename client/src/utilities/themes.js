import { violet, white } from "../components/Styles";

//active vs normal link color theme for dashboard links
export const linkBackgroundColor = (id, activeLink) => {
	if (activeLink !== undefined) {
		if (id === activeLink._id) return violet;
		else return white;
	} else {
		return white;
	}
};

export const linkColor = (id, activeLink) => {
	if (activeLink !== undefined) {
		if (id === activeLink._id) return white;
		else return violet;
	} else {
		return violet;
	}
};

export const opacityBtns = (showBtns) => (showBtns ? 1 : 0);

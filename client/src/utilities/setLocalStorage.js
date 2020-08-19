export const addLocalStorage = (item, contents) => {
	if (item && contents) localStorage.setItem(item, contents);
};

export const removeLocalStorage = (item) => {
	if (item) localStorage.removeItem(item);
};

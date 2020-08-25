import { useContext } from "react";
import { LinksContext } from "../context/LinksContext";

export const useLinks = () => {
	const [links, setLinks] = useContext(LinksContext);

	const setLinksFromBrowser = () => {
		if (localStorage.links) setLinks(() => JSON.parse(localStorage.links));
	};

	const setLinksFromDB = (links) => setLinks(links);

	const deleteLinkFromLinks = ({ link }) => {
		setLinks((prev) => prev.filter((prevLink) => prevLink._id !== link._id));
	};

	const updateLinkInLinks = ({ _id, short }) => {
		setLinks((prev) =>
			prev.map((prevLink) => {
				return prevLink._id === _id ? { ...prevLink, short } : { ...prevLink };
			})
		);
	};

	const removeBrowserLinks = () => setLinks([]);

	const addLink = (newLinks) => {
		setLinks(newLinks);
	}

	return {
		links,
		setLinksFromBrowser,
		setLinksFromDB,
		deleteLinkFromLinks,
		updateLinkInLinks,
		removeBrowserLinks,
		addLink,
	};
};

import React, { useState } from "react";
import { PrimaryButton, LinkModal } from "../Styles";
import axios from "axios";
import { shortlyUrl } from "../../utilities/urls";
import Error from "../Error";
import CloseButton from "./CloseButton";
import { useProcessLink } from "../../hooks/useProcessLink";
import { useLinks } from "../../hooks/useLinks";
import { useFlash } from "../../hooks/useFlash";
import { useActiveLink } from "../../hooks/useActiveLink";

const LinkEditor = () => {
	const { updateLinkInLinks } = useLinks();
	const { setProcessNull } = useProcessLink();
	const {
		activeLink: link,
		activeLink: { _id, short, full },
	} = useActiveLink();
	const [newShortLink, setNewShortLink] = useState(short);
	const { showFlash } = useFlash();
	const [error, setError] = useState();
	const handleChange = (event) => {
		setError(null);
		setNewShortLink(event.target.value);
	};
	const updateLink = (event) => {
		event.preventDefault();
		if (!newShortLink) return setError("Please enter a new short link");
		if (newShortLink === short)
			return setError("New short link same as existing");
		if (newShortLink.length > 16 || newShortLink.length < 3)
			return setError("Short link must contain 3 - 16 characters");
		if (newShortLink.match(/\W/))
			return setError("Short link must only contain letters and numbers");
		const newLink = { ...link, short: newShortLink };
		axios
			.put(`/api/links/${_id}`, newLink)
			.then(() => {
				updateLinkInLinks(newLink);
				showFlash("Link updated");
				setProcessNull();
			})
			.catch(() => setError("Update failed, please try again"));
	};
	return (
		<LinkModal onSubmit={(event) => updateLink(event)} noValidate>
			<h3>Edit Shortly Link</h3>
			<p>{full}</p>
			<div style={{ display: "flex" }}>
				<p>{shortlyUrl}</p>
				<input
					onChange={handleChange}
					value={newShortLink || ""}
					required
					pattern="^[a-z0-9_-]{3,16}$"
					data-testid="input"
				/>
			</div>
			{error && <Error error={error} />}
			<PrimaryButton id="update" data-testid="button">
				Update
			</PrimaryButton>
			<CloseButton />
		</LinkModal>
	);
};

export default React.memo(LinkEditor);

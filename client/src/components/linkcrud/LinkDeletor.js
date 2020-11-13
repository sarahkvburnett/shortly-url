import React, { useState } from "react";
import { LinkModal, PrimaryButton } from "../Styles";
import axios from "axios";
import { shortlyUrl } from "../../utilities/urls";
import Error from "../Error";
import CloseButton from "./CloseButton";
import { useLinks } from "../../hooks/useLinks";
import { useProcessLink } from "../../hooks/useProcessLink";
import { useFlash } from "../../hooks/useFlash";
import { useUser } from "../../hooks/useUser";
import { useActiveLink } from "../../hooks/useActiveLink";

const LinkDeletor = () => {
	const { deleteLinkFromLinks } = useLinks();
	const {
		user: { id },
	} = useUser();
	const {
		activeLink: link,
		activeLink: { _id, short, full },
	} = useActiveLink();
	const { setProcessNull } = useProcessLink();
	const { showFlash } = useFlash();
	const [error, setError] = useState();
	const deleteLink = (event) => {
		event.preventDefault();
		axios
			.delete(`/api/links/${_id}`, { data: { userId: id } })
			.then((res) => {
				deleteLinkFromLinks({ link });
				showFlash("Link deleted");
				setProcessNull();
			})
			.catch((err) => setError("Delete failed, please try again"));
	};

	return (
		<LinkModal onSubmit={(event) => deleteLink(event)}>
			<h3>Delete Shortly Link</h3>
			<p>{full}</p>
			<p>{shortlyUrl + short}</p>
			{error && <Error error={error} />}
			<PrimaryButton id="delete">Delete</PrimaryButton>
			<CloseButton />
		</LinkModal>
	);
};

export default React.memo(LinkDeletor);

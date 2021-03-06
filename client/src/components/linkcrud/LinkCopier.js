import React from "react";
import { useCopyLink } from "../../hooks/useCopyLink";
import { shortlyUrl } from "../../utilities/urls";
import { PrimaryButton, LinkModal } from "../Styles";
import CloseButton from "./CloseButton";
import { useProcessLink } from "../../hooks/useProcessLink";
import { useFlash } from "../../hooks/useFlash";
import { useActiveLink } from "../../hooks/useActiveLink";

const LinkCopier = () => {
	const { setProcessNull } = useProcessLink();
	const { activeLink: { short } } = useActiveLink();
	console.log(short);
	const { showFlash } = useFlash();
	const { copiedLink, copyLink } = useCopyLink();
	const copyShortLink = (event) => {
		event.persist();
		copyLink(event, true);
		showFlash("Link copied");
		setProcessNull();
	};
	return (
		<LinkModal>
			<h3>Copy Shortly Link</h3>
			<input value={shortlyUrl + short} readOnly />
			{!copiedLink && (
				<PrimaryButton type="button" id="copy" onClick={copyShortLink}>
					Copy
				</PrimaryButton>
			)}
			{copiedLink && <PrimaryButton disabled>Copied</PrimaryButton>}
			<CloseButton />
		</LinkModal>
	);
};

export default React.memo(LinkCopier);

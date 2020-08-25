import React from "react";
import { LinkModal } from "../Styles";
import { useProcessLink } from "../../hooks/useProcessLink";
const LinkCopier = lazy(() => import("../components/linkcrud/LinkCopier"));
const LinkEditor = lazy(() => import("../components/linkcrud/LinkEditor"));
const LinkDeletor = lazy(() => import("../components/linkcrud/LinkDeletor"));

const LinkModal = () => {
const {
		processLink: { process },
	} = useProcessLink();
    return (
        <LinkModal>
                {process === "copy" && <LinkCopier />}
            	{process === "edit" && <LinkEditor />}
				{process === "delete" && <LinkDeletor />}
        </LinkModal>
}

export default LinkModal;
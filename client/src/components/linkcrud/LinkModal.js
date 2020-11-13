import React from "react";
import { LinkModal as Modal} from "../Styles";
import { useProcessLink } from "../../hooks/useProcessLink";
import LinkCopier from "./LinkCopier";
import LinkEditor from "./LinkEditor";
import LinkDeletor from "./LinkDeletor";

const LinkModal = () => {
const {
		processLink: { process },
	} = useProcessLink();
    return (
        <Modal>
                {process === "copy" && <LinkCopier />}
            	{process === "edit" && <LinkEditor />}
				{process === "delete" && <LinkDeletor />}
        </Modal>
    )
}

export default React.memo(LinkModal);
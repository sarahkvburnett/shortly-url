import React from "react";
import CloseButton from "../CloseButton";
import { rendersWithoutCrashing, matchesSnapshot } from "../../../setupTests";
import { ProcessLinkProvider } from "../../../context/ProcessLinkContext";

const CloseButtonWrapper = () => {
	return (
		<ProcessLinkProvider>
			<CloseButton />
		</ProcessLinkProvider>
	);
};

it("renders close button without crashing", () =>
	rendersWithoutCrashing(CloseButtonWrapper));

it("close button matches snapshot", () => matchesSnapshot(CloseButtonWrapper));

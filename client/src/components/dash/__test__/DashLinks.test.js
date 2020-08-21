import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import {
	rendersWithoutCrashing,
	matchesSnapshot,
	ComponentWrapper,
	sampleLinks,
} from "../../../setupTests";
import DashLinks from "../DashLinks";
import { LinksContext } from "../../../context/LinksContext";
import { ActiveLinkContext } from "../../../context/ActiveLinkContext";
import { ProcessLinkProvider } from "../../../context/ProcessLinkContext";

const DashLinksWrapper = () => {
	const [links, setLinks] = useState(sampleLinks);
	const [activeLink, setActiveLink] = useState(sampleLinks[0]);
	return (
		<LinksContext.Provider value={[links, setLinks]}>
			<ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
				<ProcessLinkProvider>
					<DashLinks />
				</ProcessLinkProvider>
			</ActiveLinkContext.Provider>
		</LinksContext.Provider>
	);
};

it("renders dash link without crashing", () =>
	rendersWithoutCrashing(DashLinksWrapper));

it("dash link matches snapshot", () => matchesSnapshot(DashLinksWrapper));

it("renders link for each in links", () => {
	render(<DashLinksWrapper />);
	expect(screen.getAllByTestId("link").length).toBe(2);
});

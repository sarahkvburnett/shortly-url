import React, { useState } from "react";
import {
	rendersWithoutCrashing,
	matchesSnapshot,
	sampleLinks,
} from "../../../setupTests";
import DashLink from "../DashLink";
import { ActiveLinkContext } from "../../../context/ActiveLinkContext";
import { screen, fireEvent, render } from "@testing-library/react";
import { ProcessLinkProvider } from "../../../context/ProcessLinkContext";

const DashLinkWrapper = () => {
	const [activeLink, setActiveLink] = useState(sampleLinks[1]);
	return (
		<ActiveLinkContext.Provider value={[activeLink, setActiveLink]}>
			<ProcessLinkProvider>
				<DashLink link={sampleLinks[0]} />
			</ProcessLinkProvider>
		</ActiveLinkContext.Provider>
	);
};

it("renders dash link without crashing", () =>
	rendersWithoutCrashing(DashLinkWrapper));

it("dash link matches snapshot", () => matchesSnapshot(DashLinkWrapper));

it("dash link theme", async () => {
	render(<DashLinkWrapper />);
	expect(screen.getByTestId("link").style.background).toBe = "#FFF";
	await fireEvent.click(screen.getByTestId("link"));
	expect(screen.getByTestId("link").style.background).toBe =
		"hsl(257, 27%, 26%)";
});

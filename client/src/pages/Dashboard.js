import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLinks } from "../hooks/useLinks";
import { useProcessLink } from "../hooks/useProcessLink";
import { violet, grey } from "../components/Styles";
import DashNone from "../components/dash/DashNone";
import DashLoad from "../components/dash/DashLoad";
import DashLinks from "../components/dash/DashLinks";
import Graph from "../components/dash/Graph";
const LinkCopier = lazy(() => import("../components/linkcrud/LinkCopier"));
const LinkEditor = lazy(() => import("../components/linkcrud/LinkEditor"));
const LinkDeletor = lazy(() => import("../components/linkcrud/LinkDeletor"));
const LinkShortener = lazy(() =>
	import("../components/linkcrud/LinkShortener")
);

const Dash = styled.div`
	min-height: 70vh;
	background: ${grey};
	color: ${violet};
	h2 {
		text-align: center;
	}
`;

const Dashboard = () => {
	const { links } = useLinks();
	const {
		processLink: { process, link: { short } },
	} = useProcessLink();
	console.log(short);
	const [loading, setLoading] = useState(true)
	return (
		<Dash data-testid="dashboard">
			{loading && <DashLoad setLoading={setLoading} />}
			{!loading && <>{links.length > 0 ? <Graph /> : <DashNone />}</>}
			<Suspense fallback={<div />}>
				{!loading && links.length > 0 && <DashLinks short={short} />}
				{process === "copy" && <LinkCopier short={short} />}
				{process === "edit" && <LinkEditor short={short} />}
				{process === "delete" && <LinkDeletor short={short} />}
				<LinkShortener position="0" />
			</Suspense>
		</Dash>
	);
};

export default Dashboard;

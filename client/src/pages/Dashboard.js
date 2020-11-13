import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLinks } from "../hooks/useLinks";
import { useProcessLink } from "../hooks/useProcessLink";
import { violet, grey } from "../components/Styles";
import DashNone from "../components/dash/DashNone";
import DashLoad from "../components/dash/DashLoad";
import DashLinks from "../components/dash/DashLinks";
import Graph from "../components/dash/Graph";
const LinkModal = lazy(() => import("../components/linkcrud/LinkModal"));
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
		processLink: { process },
	} = useProcessLink();
	const [loading, setLoading] = useState(true);
	return (
		<Dash data-testid="dashboard">
			{loading && <DashLoad setLoading={setLoading} />}
			{!loading && <>{links.length > 0 ? <Graph /> : <DashNone />}</>}
			<Suspense fallback={<div />}>
				{!loading && links.length > 0 && <DashLinks />}
				<CSSTransition
					in={process}
					timeout={1000}
					classNames="modal"
					unmountOnExit
				>
					<LinkModal />
				</CSSTransition>
				<div style={{ padding: "5vh 0" }}>
					<LinkShortener bg={grey} />
				</div>
			</Suspense>
		</Dash>
	);
};

export default Dashboard;

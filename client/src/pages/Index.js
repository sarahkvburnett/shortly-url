import React, { lazy, Suspense } from "react";
import Intro from "../components/index/Intro";
import LinkShortener from "../components/linkcrud/LinkShortener";
import { white } from "../components/Styles";
const Links = lazy(() => import("../components/index/IndexLinks"));
const Statistics = lazy(() => import("../components/index/Statistics"));
const Boost = lazy(() => import("../components/index/Boost"));

const Home = () => {
	return (
		<>
			<Intro />
			<LinkShortener bg={white} />
			<Suspense fallback={<div />}>
				<Links />
				<Statistics />
				<Boost />
			</Suspense>
		</>
	);
};

export default Home;

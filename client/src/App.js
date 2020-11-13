import React, { useState, useEffect, Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import { useUser } from "./hooks/useUser";
import Flash from "./components/Flash";
import { useFlash } from "./hooks/useFlash";
import { setAuthHeader } from "./utilities/setAuthHeader";

const Footer = lazy(() => import("./components/Footer"));
const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export const App = () => {
	const [isMobNav, setIsMobNav] = useState(false);
	const toggleMobNav = () =>
		isMobNav ? setIsMobNav(false) : setIsMobNav(true);
	const mobNav = {
		isMobNav,
		toggleMobNav,
	};
	const {
		user: { isAuth },
		loginUser,
	} = useUser();
	const { isFlashVisible } = useFlash();
	useEffect(() => {
		if (localStorage.user) {
			const { token, id } = JSON.parse(localStorage.user);
			setAuthHeader(token);
			loginUser(id, token);
		}
	}, []);
	const mainPosition = () => {
		if (isMobNav) return { position: "fixed" };
	};
	return (
		<main style={mainPosition()}>
			<Router>
				{isFlashVisible && <Flash />}
				<NavBar mobNav={mobNav} />
				<Suspense fallback={<div style={{ minHeight: "90vh" }} />}>
					<Switch>
						<Route path="/login">
							{isAuth ? <Redirect to="/dashboard" /> : <Auth auth="login" />}
						</Route>
						<Route path="/signup">
							{isAuth ? <Redirect to="/dashboard" /> : <Auth auth="signup" />}
						</Route>
						<Route path="/logout">
							{isAuth ? <Auth auth="logout" /> : <Redirect to="/" />}
						</Route>
						<Route path="/dashboard">
							{isAuth ? <Dashboard /> : <Redirect to="/login" />}
						</Route>
						<Route path="/">
							{isAuth ? <Redirect to="/dashboard" /> : <Home />}
						</Route>
					</Switch>
					<Footer />
				</Suspense>
			</Router>
		</main>
	);
};

import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import styled from "styled-components";
import { breakpoint, alignPadding } from "./Styles";
import MediaQuery from "react-responsive";
import { Close, Burger } from "./Icons";
const NavLinks = lazy(() => import("./NavLinks"));

const Nav = styled.div`
	padding: 0 ${alignPadding};
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	.logo {
		height: 10vh;
		display: flex;
		align-items: center;
		img {
			max-height: 5vh;
		}
	}
`;
const NavBar = ({mobNav: {isMobNav, toggleMobNav}}) => {
	return (
		<Nav>
			<Link className="logo" to="/">
				<img src={Logo} alt="Shortly" />
			</Link>
			<Suspense fallback={<div />}>
				<MediaQuery minDeviceWidth={breakpoint}>
					<NavLinks />
				</MediaQuery>
				<MediaQuery maxDeviceWidth={breakpoint}>
					{isMobNav && <NavLinks toggleMobNav={toggleMobNav} />}
				</MediaQuery>
			</Suspense>
			<MediaQuery maxDeviceWidth={breakpoint}>
				<div onClick={toggleMobNav}>{isMobNav ? <Close /> : <Burger />}</div>
			</MediaQuery>
		</Nav>
	);
};

export default NavBar;

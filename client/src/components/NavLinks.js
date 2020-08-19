import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, PrimaryButton, white, grey, violet, desktop } from "./Styles";
import { useUser } from "../hooks/useUser";

const Links = styled.div`
	display: flex;
	@media (max-width: ${desktop}) {
		position: absolute;
		z-index: 101;
		top: 10vh;
		left: 1vw;
		height: 89vh;
		width: 98vw;
		flex-direction: column;
		background: ${violet};
		padding: 2vh 2vw;
		border-radius: 15px;
		.resourcesBtn:after {
			content: "";
			display: block;
			width: 70vw;
			margin: auto;
			height: 10vh;
			border-bottom: 2px solid ${grey};
		}
		button {
			display: block;
			color: ${white};
			a {
				color: ${white};
			}
			margin: 5px 0;
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}
		div:first-child {
			height: 60%;
		}
		div:nth-of-type(2) {
			button {
				width: 70vw;
				margin: 2vh;
				border-radius: 30px;
			}
		}
	}
	@media (min-width: ${desktop}) {
		position: relative;
		flex-basis: 75vw;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 10vh;
		width: auto;
		button {
			margin: 2vh;
		}
	}
`;

const NavLinks = ({ toggleMobNav = () => {} }) => {
	const {
		user: { isAuth },
	} = useUser();
	return (
		<Links onClick={toggleMobNav}>
			<div>
				<Button>Features</Button>
				<Button>Pricing</Button>
				<Button className="resourcesBtn">Resources</Button>
			</div>
			<div data-testid="authBtns">
				{!isAuth && (
					<Link to="/login">
						<Button>Login</Button>
					</Link>
				)}
				{!isAuth && (
					<Link to="/signup">
						<PrimaryButton>Sign Up</PrimaryButton>
					</Link>
				)}
				{isAuth && (
					<Link to="/logout">
						<PrimaryButton>Logout</PrimaryButton>
					</Link>
				)}
			</div>
		</Links>
	);
};

export default NavLinks;

import React from "react";
import { Link } from "react-router-dom";
import { AuthForm, PrimaryFormBtn } from "../Styles";
import { useUser } from "../../hooks/useUser";
import { useFlash } from "../../hooks/useFlash";
import { setAuthHeader } from "../../utilities/setAuthHeader";
import { removeLocalStorage } from "../../utilities/setLocalStorage";
import { useLinks } from "../../hooks/useLinks";

const Logout = () => {
	const { logoutUser } = useUser();
	const { showFlash } = useFlash();
	const { removeBrowserLinks } = useLinks();
	const logout = () => {
		setAuthHeader();
		removeLocalStorage("user");
		logoutUser();
		showFlash("Logout successful");
		removeBrowserLinks();
	};
	return (
		<AuthForm data-testid="logout">
			<h3>Are you sure you want to logout?</h3>
			<PrimaryFormBtn onClick={logout}>Yes</PrimaryFormBtn>
			<PrimaryFormBtn>
				<Link to="/dashboard">No</Link>
			</PrimaryFormBtn>
		</AuthForm>
	);
};

export default Logout;

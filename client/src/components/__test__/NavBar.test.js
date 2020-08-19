import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../NavBar";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

const NavBarWrapper = () => (
	<Router>
		<NavBar />
	</Router>
);

it("renders NavLinks without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<NavBarWrapper />, div);
});

it("nav bar matches snapshot", () => {
	const tree = renderer.create(<NavBarWrapper />).toJSON();
	expect(tree).toMatchSnapshot();
});

//TODO: add check for media query ??

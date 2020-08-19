import React from "react";
import ReactDOM from "react-dom";
import Intro from "../Intro";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders intro without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Intro />, div);
});

it("renders intro correctly", () => {
	const { getByRole } = render(<Intro />);
	expect(getByRole("heading").textContent).toBe("More than just shorter links");
	expect(getByRole("button").textContent).toBe("Get Started");
});

it("intro matches snapshot", () => {
	const tree = renderer.create(<Intro />).toJSON();
	expect(tree).toMatchSnapshot();
});

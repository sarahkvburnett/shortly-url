import React from "react";
import ReactDOM from "react-dom";
import AuthErrors from "../AuthErrors";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

const errors = ["I am error 1", "I am error 2", "I am error 3"];

it("renders errors without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AuthErrors errors={errors} />, div);
});

it("renders errors correctly", () => {
	const { getByTestId } = render(<AuthErrors errors={errors} />);
	expect(getByTestId("errors").textContent).toContain(
		"I am error 1I am error 2I am error 3"
	);
});

it("error matches snapshot", () => {
	const tree = renderer.create(<AuthErrors errors={errors} />).toJSON();
	expect(tree).toMatchSnapshot();
});

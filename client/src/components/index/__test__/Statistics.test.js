import React from "react";
import ReactDOM from "react-dom";
import Statistics from "../Statistics";
import renderer from "react-test-renderer";

it("renders statistics without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Statistics />, div);
});

it("statistics matches snapshot", () => {
	const tree = renderer.create(<Statistics />).toJSON();
	expect(tree).toMatchSnapshot();
});

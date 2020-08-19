import React from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";
import renderer from "react-test-renderer";

it("renders footer without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Footer />, div);
});

it("footer matches snapshot", () => {
	const tree = renderer.create(<Footer />).toJSON();
	expect(tree).toMatchSnapshot();
});

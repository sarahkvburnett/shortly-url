import {
	rendersWithoutCrashing,
	matchesSnapshot,
	ComponentWrapper,
} from "../../../setupTests";
import Logout from "../Logout";

const LogoutWrapper = () => ComponentWrapper(Logout);

it("renders logout without crashing", () =>
	rendersWithoutCrashing(LogoutWrapper));

it("logout matches snapshot", () => matchesSnapshot(LogoutWrapper));

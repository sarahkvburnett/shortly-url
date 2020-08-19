import {
	rendersWithoutCrashing,
	matchesSnapshot,
	ComponentWrapper,
} from "../../../setupTests";
import DashLinkBtns from "../DashLinkBtns";

const DashLinkBtnsWrapper = () => ComponentWrapper(DashLinkBtns);

it("renders dash link btns without crashing", () =>
	rendersWithoutCrashing(DashLinkBtnsWrapper));

it("dash link btns matches snapshot", () =>
	matchesSnapshot(DashLinkBtnsWrapper));

//TODO: integrationt tests clicking buttons gives you modal

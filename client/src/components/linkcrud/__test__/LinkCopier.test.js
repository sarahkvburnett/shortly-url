import {
	rendersWithoutCrashing,
	matchesSnapshot,
	ComponentWrapper,
} from "../../../setupTests";
import LinkCopier from "../LinkCopier";

const LinkCopierWrapper = () => ComponentWrapper(LinkCopier);

it("renders link copier without crashing", () =>
	rendersWithoutCrashing(LinkCopierWrapper));

it("link copier matches snapshot", () => matchesSnapshot(LinkCopierWrapper));

//TODO: check copy link copy links - integration

import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../../setupTests';
import LinkCopyBtn from '../LinkCopyBtn';

const LinkCopyBtnWrapper = () => ComponentWrapper(LinkCopyBtn);

it('renders link copy btn without crashing', () => rendersWithoutCrashing(LinkCopyBtnWrapper));

it('link copy btn matches snapshot', () => matchesSnapshot(LinkCopyBtnWrapper));

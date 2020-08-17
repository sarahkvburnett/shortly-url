import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../../setupTests';
import LinkShortener from '../LinkShortener';

const LinkShortenerWrapper = () => ComponentWrapper(LinkShortener)

it('renders link shortener without crashing', () => rendersWithoutCrashing(LinkShortenerWrapper));

it('link shortener matches snapshot', () => matchesSnapshot(LinkShortenerWrapper));

//TODO: check css positioning of the form
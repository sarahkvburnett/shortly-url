import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../../setupTests';
import CopyShortLink from '../CopyShortLink';

it('renders copy short link without crashing', () => rendersWithoutCrashing(CopyShortLink));

it('copy short link matches snapshot', () => matchesSnapshot(CopyShortLink));

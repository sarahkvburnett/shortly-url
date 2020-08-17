import { rendersWithoutCrashing, matchesSnapshot } from '../../../setupTests';
import DashNone from '../DashNone';

it('renders dash load without crashing', () => rendersWithoutCrashing(DashNone));

it('dash load matches snapshot', () => matchesSnapshot(DashNone));

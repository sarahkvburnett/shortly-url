import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../setupTests';
import Home from '../Index';

const IndexWrapper = () => ComponentWrapper(Home);

it('renders index without crashing', () => rendersWithoutCrashing(IndexWrapper));

it('index matches snapshot', () => matchesSnapshot(IndexWrapper));
import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../setupTests';
import Dashboard from '../Dashboard';

const DashboardWrapper = () => ComponentWrapper(Dashboard);

it('renders dashboard without crashing', () => rendersWithoutCrashing(DashboardWrapper));

it('dashboard matches snapshot', () => matchesSnapshot(DashboardWrapper));

//TODO: test conditional rendering


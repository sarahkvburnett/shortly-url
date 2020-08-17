import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../../setupTests';
import { render, fireEvent, screen } from '@testing-library/react';
import LinkAdder from '../LinkAdder';

const LinkAdderWrapper = () => ComponentWrapper(LinkAdder);

it('renders link adder without crashing', () => rendersWithoutCrashing(LinkAdderWrapper));

it('link adder matches snapshot', () => matchesSnapshot(LinkAdderWrapper));

it('valid url does not show error', async () => {
    render(LinkAdderWrapper());
    await fireEvent.change(screen.getByTestId('input'), {
        target: {
            value: "https://google.com"
        }
    })
    await fireEvent.click(screen.getByTestId('button'))
    expect(screen.queryByTestId('error')).toBe(null);
})

it('invalid url shows error', async () => {
    render(LinkAdderWrapper());
    await fireEvent.change(screen.getByTestId('input'), {
        target: {
            value: "asdfjalsfjwpjfroejf"
        }
    })
    await fireEvent.click(screen.getByTestId('button'))
    expect(screen.getByTestId('error')).toHaveTextContent('Please add a link');
})

//TODO: check adding link adds link - integration
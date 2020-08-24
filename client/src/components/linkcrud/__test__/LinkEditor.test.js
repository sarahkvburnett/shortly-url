import { rendersWithoutCrashing, matchesSnapshot, ComponentWrapper } from '../../../setupTests';
import LinkEditor from '../LinkEditor';
import { render, fireEvent, screen } from '@testing-library/react';

const LinkEditorWrapper = () => ComponentWrapper(LinkEditor)

it('renders link editor without crashing', () => rendersWithoutCrashing(LinkEditorWrapper));

it('link editor matches snapshot', () => matchesSnapshot(LinkEditorWrapper));

it('valid new short url does not show error', async () => {
    render(LinkEditorWrapper());
    await fireEvent.change(screen.getByTestId('input'), {
        target: {
            value: "shortLink"
        }
    })
    await fireEvent.click(screen.getByTestId('button'))
    expect(screen.queryByTestId('error')).toBe(null);
})

it('invalid new short url shows error', async () => {
    render(LinkEditorWrapper());
    await fireEvent.change(screen.getByTestId('input'), {
        target: {
            value: ""
        }
    })
    await fireEvent.click(screen.getByTestId('button'))
    expect(screen.getByTestId('error')).toHaveTextContent('Please enter a new short link');
})

import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import { render, cleanup, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import renderer from 'react-test-renderer';
import { UserProvider } from '../../../context/UserContext';
import { LinksProvider } from '../../../context/LinksContext';
import { BrowserRouter } from 'react-router-dom';

const LoginWrapper = () => {
    return (
        <UserProvider>
            <LinksProvider>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </LinksProvider>
        </UserProvider>
    )
}
const server = setupServer(
    rest.get('/login', (req, res, ctx) => {
      return res(ctx.json({
            "id": "sdfaskldfjasdjfa;fj",
            "token": "Bearer eyJhbGciOadfsdfsd5cCI6IkpXVCJ9.eyJmaXJzdEasfdsafasdfImlkIjoiNWViZTasfdkMjM1ZTRhNTAxZWU4Njk5MDU4IiwiaWF0IjoxNTk3MDc0OTMwLCJleHAiOjE1OTk2NjY5MzB9.AzE-5eGRAnX_WQCz4gOxeZdgqaG9FSt5__mvB-5XevY"
        }))
    })
  )
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterEach(cleanup);
afterAll(() => server.close())

//TODO:
//form submit posts
// test unsuccessful login shows error
//test sucessful login modifies user state
//test login reroutes to dashboard
//test login clears links
// test validation

it('renders login without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginWrapper/>, div);
})

it('user is logged in', async () => {
    render(<LoginWrapper/>)
    fireEvent.click(screen.getByText('Submit'))
    await waitForElementToBeRemoved(() => screen.getByText('Login'))

});

it('login matches snapshot', () => {
    const tree = renderer.create(<LoginWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
})
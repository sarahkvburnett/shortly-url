import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import { render, cleanup, fireEvent, screen, waitForElement } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import renderer from 'react-test-renderer';
import { UserProvider } from '../../../context/UserContext';
import { LinksProvider } from '../../../context/LinksContext';
import { FlashProvider } from '../../../context/FlashContext';

const LoginWrapper = (formValues) => {
    return (
        <UserProvider>
            <LinksProvider>
                <FlashProvider>
                        <Login formValues={formValues} setFormValues={()=>{}} loginUrl='/login'/>
                </FlashProvider>
            </LinksProvider>
        </UserProvider>
    )
}

const ValidLoginWrapper = () => LoginWrapper({
    email: "sarah@gmail.com",
    password: "123456"
})


const InvalidLoginWrapper = () => LoginWrapper({
    email: "",
    password: ""
})


const server = setupServer(
    rest.post('/login', (req, res, ctx) => {
        console.log("msw");
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
// test 404 server error - err.response.data.error undefined

it('renders login without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidLoginWrapper/>, div);
})

it('valid user is logged in', async () => {
    render(<ValidLoginWrapper/>);
    await fireEvent.click(screen.getByText('Submit'));
    expect(screen.queryByTestId('errors')).toBe(null);
});

it('invalid user shows error', async () => {
    render(<InvalidLoginWrapper/>);
    fireEvent.click(screen.getByText('Submit'));
    await waitForElement(() => screen.getByTestId('errors'))
    expect(screen.getByTestId('errors')).toHaveTextContent('Please enter your emailPlease enter your password');
})

it('handles server error', async () => {
    server.use(
        rest.post('/login', (req, res, ctx) => {
        return res(ctx.status(500))
        })
    )
    render(<ValidLoginWrapper/>);
    fireEvent.click(screen.getByText('Submit'));
    await waitForElement(() => screen.getByTestId('errors'))
    expect(screen.getByTestId('errors')).toHaveTextContent('Login failed. Please try again');
});

it('login matches snapshot', () => {
    const tree = renderer.create(<ValidLoginWrapper/>).toJSON();
    expect(tree).toMatchSnapshot();
})
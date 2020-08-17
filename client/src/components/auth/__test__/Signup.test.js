import React from 'react';
import { rendersWithoutCrashing, matchesSnapshot } from '../../../setupTests';
import { render, cleanup, fireEvent, screen, waitForElement } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import renderer from 'react-test-renderer';
import Signup from '../Signup';
import { UserProvider } from '../../../context/UserContext';
import { LinksProvider } from '../../../context/LinksContext';
import { FlashProvider } from '../../../context/FlashContext';

const SignupWrapper = (formValues) => {
    return (
        <UserProvider>
            <LinksProvider>
                <FlashProvider>
                    <Signup formValues={formValues} setFormValues={() => {}} signupUrl={'/signup'}/>
                </FlashProvider>
            </LinksProvider>
        </UserProvider>
    )
}

const ValidSignupWrapper = () => SignupWrapper({
    firstName: "Harriet",
    lastName: "Tripp",
    email: "harriet-tripp@outlook.com", 
    password: "123456", 
    password2: "123456", 
})


const InvalidSignupWrapper = () => SignupWrapper({
    firstName: "Harriet",
    lastName: "",
    email: "", 
    password: "1234", 
    password2: "", 
})

const server = setupServer(
    rest.post('/signup', (req, res, ctx) => {
        return res(ctx.json({
            "_id":"5f3a49088a296b42c0089d10",
            "firstName":"Harriet",
            "lastName":"Tripp",
            "email":"harriet.tripp@outlook.com",
            "password":"$2a$10$fa0d9DBBN96GR.i9HU/U7uSe08s4Zl6Ik8t9GC/mw9j7VxaDPJoNi",
            "date":"2020-08-17T09:08:24.192Z",
            "__v":0
        }))
    })
)
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterEach(cleanup);
afterAll(() => server.close())
 
//TODO:
// test 404 server error - err.response.data.error undefined

it('renders signup without crashing', () => rendersWithoutCrashing(ValidSignupWrapper));

it('signup matches snapshot', () => matchesSnapshot(ValidSignupWrapper));

it('valid user is signed up', async () => {
    render(<ValidSignupWrapper/>);
    await fireEvent.click(screen.getByText('Sign up'));
    expect(screen.queryByTestId('errors')).toBe(null);
});

it('invalid user shows error', async () => {
    render(<InvalidSignupWrapper/>);
    fireEvent.click(screen.getByText('Sign up'));
    await waitForElement(() => screen.getByTestId('errors'))
    expect(screen.getByTestId('errors')).toHaveTextContent('Please enter your last namePlease enter your emailPlease confirm your passwordPassword must be at least 6 charactersEntered passwords are not the same');
})

it('handles server error', async () => {
    server.use(
        rest.post('/signup', (req, res, ctx) => {
        return res(ctx.status(500))
        })
    )
    render(<ValidSignupWrapper/>);
    fireEvent.click(screen.getByText('Sign up'));
    await waitForElement(() => screen.getByTestId('errors'))
    expect(screen.getByTestId('errors')).toHaveTextContent('Sign up failed. Please try again');
});


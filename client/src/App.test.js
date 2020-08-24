import {
	rendersWithoutCrashing,
	matchesSnapshot,
	AppRouterWrapper,
} from "./setupTests";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

const authenticatedUser = {
	isAuth: true,
	id: "adsf523d8fs",
	token: "Bearer 3209f8f.adsfu9823.324s9asf789",
};
const unauthenticatedUser = { isAuth: false };

const Home = (user = unauthenticatedUser) => AppRouterWrapper("/", user);
const Login = (user = unauthenticatedUser) => AppRouterWrapper("/login", user);
const Signup = (user = unauthenticatedUser) =>
	AppRouterWrapper("/signup", user);
const Logout = (user = athenticatedUser) => AppRouterWrapper("/logout", user);
const Dashboard = (user = authenticatedUser) =>
	AppRouterWrapper("/dashboard", user);

afterEach(cleanup);

it("renders home without crashing", () => rendersWithoutCrashing(Home));
it("renders login without crashing", () => rendersWithoutCrashing(Login));
it("renders signup without crashing", () => rendersWithoutCrashing(Signup));
it("renders logout without crashing", () => rendersWithoutCrashing(Logout));
it("renders dash without crashing", () => rendersWithoutCrashing(Dashboard));

it("home matches screenshot", () => matchesSnapshot(Home));
it("login matches screenshot", () => matchesSnapshot(Login));
it("signup matches screenshot", () => matchesSnapshot(Signup));
it("logout matches screenshot", () => matchesSnapshot(Logout));
it("dash matches screenshot", () => matchesSnapshot(Dashboard));

// it("authenticated user redirected from user to dashboard", () => {
// 	render(() => Home(authenticatedUser));
// 	expect(screen.queryByTestId("dashboard")).toBe(true);
// 	expect(screen.queryByTestId("home")).toBe(null);
// });

// it("authenticated user redirected from login to dashboard", () => {
// 	render(() => Login(authenticatedUser));
// 	expect(screen.queryByTestId("dashboard")).toBe(true);
// 	expect(screen.queryByTestId("login")).toBe(null);
// });

// it("authenticated user redirected from signup to dashboard", () => {
// 	render(() => Signup(authenticatedUser));
// 	expect(screen.queryByTestId("dashboard")).toBe(true);
// 	expect(screen.queryByTestId("signup")).toBe(null);
// });

// it("unauthenticated user redirected from dashboard to home", () => {
// 	render(() => Dashboard(unauthenticatedUser));
// 	expect(screen.queryByTestId("dashboard")).toBe(null);
// 	expect(screen.queryByTestId("home")).toBe(true);
// });

// it("unauthenticated user redirected from logout to home", () => {
// 	render(() => Dashboard(unauthenticatedUser));
// 	expect(screen.queryByTestId("logout")).toBe(null);
// 	expect(screen.queryByTestId("home")).toBe(true);
// });

// it("unauthenticated user routed correctly", async () => {
// 	render(Home());
// 	expect(screen.queryByTestId("home")).toBe(true);
// 	await fireEvent(screen.queryByText("Login"));
// 	expect(screen.queryByTestId("login")).toBe(true);
// 	await fireEvent(screen.queryByText("Signup"));
// 	expect(screen.queryByTestId("signup")).toBe(true);
// });

// it("authenticated user routed correctly", async () => {
// 	render(Dashboard());
// 	expect(screen.queryByTestId("dashboard")).toBe(true);
// 	await fireEvent(screen.queryByText("Logout"));
// 	expect(screen.queryByTestId("logout")).toBe(true);
// });

//TODO: fix the above all screenshots rendering home!!

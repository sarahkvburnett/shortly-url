import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Errors from "./AuthErrors";
import axios from "axios";
import { isSignupValid } from "./validateAuth";
import { AuthForm, Label, Input, PrimaryFormBtn } from "../Styles";
import { useFlash } from "../../hooks/useFlash";

const Signup = ({ formValues, setFormValues, signupUrl }) => {
	const { showFlash } = useFlash();
	const [errors, setErrors] = useState([]);
	const [isSignedUp, setIsSignedUp] = useState(false);
	const { firstName, lastName, email, password, password2 } = formValues;
	const handleChange = (event) => {
		event.persist();
		setFormValues((values) => ({
			...values,
			[event.target.id]: event.target.value,
		}));
	};
	const signup = (event) => {
		event.preventDefault();
		setErrors([]);
		const errorMsgs = isSignupValid(formValues);
		if (errorMsgs.length !== 0) return setErrors(errorMsgs);
		axios
			.post(signupUrl, formValues)
			.then(() => {
				showFlash("Sign up successful. Please login");
				setIsSignedUp(true);
				setFormValues( prev => ({...prev, password: ""}))
			})
			.catch((err) => {
				setErrors([
					err.response.data.error || "Sign up failed. Please try again",
				]);
				setFormValues((prev) => ({ ...prev, password: "" }));
			});
	};
	return (
		<>
			{!isSignedUp ? (
				<AuthForm onSubmit={signup} noValidate data-testid="signup">
					<h3>Sign Up</h3>
					{errors.length > 0 && <Errors errors={errors} />}
					<Label HTMLfor="firstName">
						First Name{" "}
						<Input
							id="firstName"
							name="firstName"
							onChange={handleChange}
							value={firstName || ""}
							required
						></Input>
					</Label>
					<Label HTMLfor="lastName">
						Last Name{" "}
						<Input
							id="lastName"
							name="lastName"
							onChange={handleChange}
							value={lastName || ""}
							required
						></Input>
					</Label>
					<Label HTMLfor="email">
						Email{" "}
						<Input
							type="email"
							id="email"
							name="email"
							onChange={handleChange}
							value={email || ""}
							required
						></Input>
					</Label>
					<Label HTMLfor="password">
						Password{" "}
						<Input
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
							value={password || ""}
							pattern={password2}
							required
						></Input>
					</Label>
					<Label HTMLfor="password2">
						Confirm your password{" "}
						<Input
							type="password"
							id="password2"
							name="password2"
							onChange={handleChange}
							value={password2 || ""}
							pattern={password}
							required
						></Input>
					</Label>
					<PrimaryFormBtn type="submit">Sign up</PrimaryFormBtn>
				</AuthForm>
			) : (
				<Redirect to="/login" />
			)}
		</>
	);
};

export default Signup;

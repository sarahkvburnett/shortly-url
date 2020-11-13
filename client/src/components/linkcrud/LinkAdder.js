import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import styled from "styled-components";
import { red, cyan, white, breakpoint } from "../Styles";
import Error from "../Error";
import { useUser } from "../../hooks/useUser";
import { useLinks } from "../../hooks/useLinks";
import { addLocalStorage } from "../../utilities/setLocalStorage";

const Form = styled.form`
	margin: auto;
	padding: 1.5vh 1vw;
	@media (max-width: ${breakpoint}) {
		input {
			width: 80vw;
			margin: 2vh 0;
		}
	}
	@media (min-width: ${breakpoint}) {
		width: 80vw;
		display: grid;
		padding: 2vh 2vw 0;
		grid-template-columns: 8fr 2fr;
		grid-template-rows: auto auto;
		grid-column-gap: 1.5vw;
		grid-template-areas: "link button" "error error";
		p {
			margin: 0;
		}
	}
`;

const Input = styled.input`
	display: block;
	border-radius: 5px;
	padding: 1vh 2vw;
	border: none;
	&:invalid {
		border: 2px solid ${red};
	}
	grid-area: link;
`;

const Button = styled(Input)`
	font-weight: bold;
	background: ${cyan};
	color: ${white};
	padding: 1vh 2vw;
	cursor: pointer;
	&:hover {
		color: ${white};
		opacity: 0.5;
	}
	grid-area: button;
`;

const LinkAdder = () => {
	const { user } = useUser();
	const { links, addLink } = useLinks();
	const [input, setInput] = useState({ value: "Shorten a link here... " });
	const [error, setError] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const changeState = (value, valid, err) => {
		setInput({ value: value, valid: valid });
		err ? setError("Please add a link") : setError(false);
	};
	const handleChange = (event) => {
		event.persist();
		setError("");
		const value = event.target.value;
		if (validator.isEmpty(value)) changeState(value, false, true);
		else if (validator.isURL(value)) changeState(value, true, false);
		else changeState(value, false, false);
	};
	const postLink = (event) => {
		event.preventDefault();
		if (!input.valid) return setError("Please add a link");
		const params = { full: input.value };
		if (user.id) params.userId = user.id;
		setIsSending(true);
		axios
			.post("api/links", params)
			.then(({ data }) => {
				const newLinks = [
					...links,
					{
						_id: data[0]._id,
						full: data[0].full,
						short: data[0]._id,
						date: data[0].date,
						click: data[0].click,
					},
				];
				if (!user.id) addLocalStorage("links", JSON.stringify(newLinks));
				addLink(newLinks);
				setInput({ value: "" });
				setIsSending(false);
			})
			.catch(() => {
				setError("Error! Please try again");
				setIsSending(false);
			});
	};
	return (
		<Form onSubmit={(event) => postLink(event)}>
			<label htmlFor="link" style={{ display: "none" }}>
				Website Url
			</label>
			{error && <Error error={error} />}
			<Input
				id="link"
				name="link"
				onChange={handleChange}
				value={input.value}
				required={input.value === "Shorten a link here..." ? false : true}
				onFocus={() => changeState("", false, true)}
				data-testid="input"
			/>
			<Button
				type="submit"
				value={isSending ? "Shortening..." : "Shorten It!"}
				disabled={isSending}
				data-testid="button"
			/>
		</Form>
	);
};

export default LinkAdder;

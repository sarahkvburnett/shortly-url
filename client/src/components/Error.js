import React from 'react';
import styled from 'styled-components';
import { red } from './Styles';
import { Exclamation } from './Icons';

const ErrorBar = styled.div`
width: 100%;
color: ${red};
padding: 1vh 1vw;
font-size: smaller;
`

const Error = ({error}) => <ErrorBar><Exclamation/> {error}</ErrorBar>;

export default Error;
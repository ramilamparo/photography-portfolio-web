import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Typography } from "./Typography";

type InputState = { $errorMessage?: string };

const invalidInputStyle = css`
	color: red;
`;

export const baseLabelStyle = css<InputState>`
	${Typography.baseTypographyStyle}

	color: #999;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	font-weight: 500;

	${(props) => props.$errorMessage && invalidInputStyle}
`;

const StyledLabel = styled.label<InputState>`
	${baseLabelStyle}
`;

interface InputLabelProps {
	errorMessage?: string;
	htmlFor?: string;
	children?: ReactNode;
}

export const InputLabel = ({
	htmlFor,
	errorMessage,
	children
}: InputLabelProps) => {
	return (
		<StyledLabel htmlFor={htmlFor} $errorMessage={errorMessage}>
			{children}
		</StyledLabel>
	);
};

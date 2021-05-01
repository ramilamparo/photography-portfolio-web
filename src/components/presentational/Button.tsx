import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { mainColor } from "../../utils/styles/theme";
import { Typography } from "./Typography";

export const baseButtonStyle = css`
	${Typography.baseTypographyStyle}
	cursor: pointer;

	&:active {
		opacity: 0.2;
	}
`;

export const outlineButtonStyle = css`
	${baseButtonStyle}
	text-transform: uppercase;
	display: inline-block;
	border: 1px solid ${mainColor};
	color: ${mainColor};
	padding: 0.5rem;
`;

export const filledButtonStyle = css`
	${baseButtonStyle}
`;

export interface ButtonProps {
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children: ReactNode;
}

const StyledButton = styled.button`
	${filledButtonStyle}
	background-color: ${mainColor};
	border-radius: 100000px;
	font-weight: 500;
	color: black;
	padding: 0.9rem;
	border: 1px solid ${mainColor};
	transition: 0.1s;

	&:hover,
	&:active {
		background-color: transparent;
		color: white;
	}
`;

export const Button = ({ children, className, onClick }: ButtonProps) => {
	return (
		<StyledButton className={className} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

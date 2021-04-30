import React from "react";
import styled from "styled-components";

export interface IconProps {
	className?: string;
	children: string;
}

const StyledIcon = styled.span`
	color: black;
	font-family: "Material Icons";
	font-weight: normal;
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;
`;

export const Icon = ({ className, children }: IconProps) => {
	return <StyledIcon className={className}>{children}</StyledIcon>;
};

import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Typography } from "./Typography";
import { baseButtonStyle } from "./Button";

export interface LinkProps {
	to: string;
	children: string;
	className?: string;
	button?: boolean;
}

const StyledLink = styled.a<Pick<LinkProps, "button">>`
	${Typography.baseTypographyStyle}
	text-decoration: none;
	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}

	${(props) => props.button && baseButtonStyle}
`;

const isUrlSameDomainRegexp = /^(\/|#)/;

const isUrlSameDomain = (url: string) => {
	return isUrlSameDomainRegexp.test(url);
};

export const Link = ({ to, children, className, button }: LinkProps) => {
	if (isUrlSameDomain(to)) {
		return (
			<StyledLink button={button} className={className} to={to} as={GatsbyLink}>
				{children}
			</StyledLink>
		);
	}
	return (
		<StyledLink button={button} className={className} href={to}>
			{children}
		</StyledLink>
	);
};

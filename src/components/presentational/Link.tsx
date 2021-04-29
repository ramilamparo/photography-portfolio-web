import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Typography } from "./Typography";

export interface LinkProps {
	to: string;
	children: string;
	className?: string;
}

const StyledLink = styled.a`
	${Typography.baseTypographyStyle}
	text-decoration: none;
	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}
`;

const isUrlSameDomainRegexp = /^(\/|#)/;

const isUrlSameDomain = (url: string) => {
	return isUrlSameDomainRegexp.test(url);
};

export const Link = ({ to, children, className }: LinkProps) => {
	if (isUrlSameDomain(to)) {
		return (
			<StyledLink className={className} to={to} as={GatsbyLink}>
				{children}
			</StyledLink>
		);
	}
	return (
		<StyledLink className={className} href={to}>
			{children}
		</StyledLink>
	);
};

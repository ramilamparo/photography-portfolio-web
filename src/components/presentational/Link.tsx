import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Typography } from "./Typography";
import { outlineButtonStyle } from "./Button";

export interface LinkProps {
	to: string;
	children: string;
	onClick?: () => void;
	className?: string;
	button?: boolean;
}

const StyledLink = styled.a<{ $button?: boolean }>`
	${Typography.baseTypographyStyle}
	text-decoration: none;
	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}

	${(props) => props.$button && outlineButtonStyle}
`;

const isUrlSameDomainRegexp = /^(\/|#)/;

const isUrlSameDomain = (url: string) => {
	return isUrlSameDomainRegexp.test(url);
};

export const Link = ({
	to,
	children,
	className,
	button,
	onClick
}: LinkProps) => {
	if (isUrlSameDomain(to)) {
		return (
			<StyledLink
				onClick={onClick}
				$button={button}
				className={className}
				to={to}
				as={GatsbyLink}
			>
				{children}
			</StyledLink>
		);
	}
	return (
		<StyledLink
			onClick={onClick}
			$button={button}
			className={className}
			href={to}
		>
			{children}
		</StyledLink>
	);
};

import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Link } from "../Link";

export interface NavBarLinkItemProps {
	label: string;
	path: string;
	className?: string;
}

const StyledLink = styled(Link)`
	font-size: 2.5rem;

	@media (${Breakpoint.PHONE_ONLY}) {
		font-size: 2rem;
	}
`;

const StyledLi = styled.li`
	list-style: none;
	margin: 2rem 0;

	@media (${Breakpoint.PHONE_ONLY}) {
		margin: 0;
	}
`;

export const NavBarLinkItem = ({
	label,
	path,
	className
}: NavBarLinkItemProps) => {
	return (
		<StyledLi>
			<StyledLink to={path} className={className}>
				{label}
			</StyledLink>
		</StyledLi>
	);
};

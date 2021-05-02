import React from "react";
import styled from "styled-components";
import { Link } from "../Link";

export interface NavBarLinkItemProps {
	label: string;
	path: string;
	className?: string;
}

const StyledLink = styled(Link)`
	font-size: 1.5rem;
	text-transform: uppercase;
`;

const StyledLi = styled.li`
	list-style: none;
	margin: 2rem 0;
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

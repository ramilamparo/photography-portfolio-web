import React, { useMemo } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { NavBarLinkItemProps, NavBarLinkItem } from "./NavBarLinkItem";

export interface NavBarLinkItemListProps {
	links: NavBarLinkItemProps[];
	className?: string;
}

const StyledUl = styled.ul`
	margin: 5rem 0;
	display: flex;
	flex-direction: column;

	@media (${Breakpoint.PHONE_ONLY}) {
		flex-direction: row;
		justify-content: space-around;
		flex-grow: 1;
		margin: 0;
	}
`;

export const NavBarLinkItemList = ({
	links,
	className
}: NavBarLinkItemListProps) => {
	const linkItemList = useMemo(() => {
		return links.map((linkProps) => {
			return <NavBarLinkItem {...linkProps} />;
		});
	}, [links]);

	return <StyledUl className={className}>{linkItemList}</StyledUl>;
};

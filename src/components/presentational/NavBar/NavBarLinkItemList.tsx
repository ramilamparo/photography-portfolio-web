import React, { useMemo } from "react";
import styled from "styled-components";
import { NavBarLinkItemProps, NavBarLinkItem } from "./NavBarLinkItem";

export interface NavBarLinkItemListProps {
	links: NavBarLinkItemProps[];
	className?: string;
}

const StyledUl = styled.ul`
	margin: 5rem 0;
	display: flex;
	flex-direction: column;
`;

export const NavBarLinkItemList = ({
	links,
	className
}: NavBarLinkItemListProps) => {
	const linkItemList = useMemo(() => {
		return links.map((linkProps) => {
			return (
				<NavBarLinkItem key={linkProps.label + linkProps.path} {...linkProps} />
			);
		});
	}, [links]);

	return <StyledUl className={className}>{linkItemList}</StyledUl>;
};

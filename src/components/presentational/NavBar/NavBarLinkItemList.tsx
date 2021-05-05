import React, { useMemo } from "react";
import styled from "styled-components";
import { NavBarLinkItemProps, NavBarLinkItem } from "./NavBarLinkItem";

export interface NavBarLinkItemListProps {
	links: NavBarLinkItemProps[];
	className?: string;
	onLinkClick?: () => void;
}

const StyledUl = styled.ul`
	margin: 5rem 0;
	display: flex;
	flex-direction: column;
`;

export const NavBarLinkItemList = ({
	links,
	className,
	onLinkClick
}: NavBarLinkItemListProps) => {
	const linkItemList = useMemo(() => {
		return links.map((linkProps) => {
			return (
				<NavBarLinkItem
					onClick={onLinkClick}
					key={linkProps.label + linkProps.path}
					{...linkProps}
				/>
			);
		});
	}, [links, onLinkClick]);

	return <StyledUl className={className}>{linkItemList}</StyledUl>;
};

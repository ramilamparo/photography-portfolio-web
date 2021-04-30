import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Logo } from "../../utils/Logo";
import { Typography } from "../Typography";
import { NavBarLinkItemProps } from "./NavBarLinkItem";
import { NavBarLinkItemList } from "./NavBarLinkItemList";

export interface NavBarProps {
	links: NavBarLinkItemProps[];
}

const StyledNav = styled.nav`
	width: 30rem;
	padding: 3rem;
	position: relative;
	flex-shrink: 0;

	@media (${Breakpoint.PHONE_ONLY}) {
		width: 100%;
		padding: 1rem;
		flex-direction: row;
		align-items: center;
	}
`;

const StyledLogo = styled(Logo)`
	height: 13rem;
	max-width: 100%;
	object-fit: cover;

	@media (${Breakpoint.PHONE_ONLY}) {
		height: 8rem;
		width: 8rem;
	}
`;

const CopyrightText = styled(Typography)`
	font-size: 1.2rem;
	position: absolute;
	margin: 1rem;
	bottom: 0;
	left: 0;

	@media (${Breakpoint.PHONE_ONLY}) {
		display: none;
	}
`;

export const NavBar = ({ links }: NavBarProps) => {
	return (
		<StyledNav>
			<StyledLogo />
			<NavBarLinkItemList links={links} />
			<CopyrightText>
				{`Copyright ©${new Date().getFullYear()} All rights reserved`}
			</CopyrightText>
		</StyledNav>
	);
};

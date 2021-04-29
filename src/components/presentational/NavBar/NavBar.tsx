import React, { useRef } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Logo } from "../Logo";
import { NavBarLinkItemProps } from "./NavBarLinkItem";
import { NavBarLinkItemList } from "./NavBarLinkItemList";

export interface NavBarProps {}

const StyledNav = styled.nav`
	background-color: red;
	width: 40rem;
	padding: 3rem;
	display: flex;
	flex-direction: column;

	@media (${Breakpoint.PHONE_ONLY}) {
		width: 100%;
		padding: 1rem;
		flex-direction: row;
		align-items: center;
	}
`;

const StyledLogo = styled(Logo)`
	height: 13rem;
	width: 13rem;
	border-radius: 10000px;

	@media (${Breakpoint.PHONE_ONLY}) {
		height: 8rem;
		width: 8rem;
	}
`;

export const NavBar = () => {
	const { current: links } = useRef<NavBarLinkItemProps[]>([
		{
			label: "Projects",
			path: "/projects"
		},
		{
			label: "Instagram",
			path: "/instagram"
		},
		{
			label: "About",
			path: "/about"
		}
	]);

	return (
		<StyledNav>
			<StyledLogo />
			<NavBarLinkItemList links={links} />
		</StyledNav>
	);
};

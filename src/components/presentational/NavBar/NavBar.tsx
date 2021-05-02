import React from "react";
import styled from "styled-components";
import edge from "../../../assets/navbar-edge.png";
import { navBarWidth } from "../../../utils/styles/theme";
import { Logo } from "../../utils/Logo";
import { Typography } from "../Typography";
import { NavBarCloseButton } from "./NavBarCloseButton";
import { NavBarLinkItemProps } from "./NavBarLinkItem";
import { NavBarLinkItemList } from "./NavBarLinkItemList";
import { NavBarOpenButton } from "./NavBarOpenButton";

export interface NavBarProps {
	links: NavBarLinkItemProps[];
	onClose?: () => void;
	onOpen?: () => void;
	isNavBarOpen: boolean;
}

const StyledNav = styled.nav`
	width: ${navBarWidth};
	height: 100%;
	padding: 3rem;
	position: relative;
	flex-shrink: 0;

	&::before {
		content: "";
		height: 100%;
		width: 15px;
		position: absolute;
		top: 0;
		right: 0;
		background-image: url(${edge});
		background-size: contain;
		opacity: 0.2;
	}
	&::after {
		content: "";
		height: 100%;
		width: 15px;
		position: absolute;
		top: 0;
		right: 0;
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
	}
`;

const StyledLogo = styled(Logo)`
	margin-top: 1rem;
	height: 13rem;
	max-width: 100%;
	object-fit: cover;
`;

const CopyrightText = styled(Typography)`
	font-size: 1.2rem;
	position: absolute;
	margin: 1rem;
	bottom: 0;
	left: 0;
	opacity: 0.2;
`;

const CloseButton = styled(NavBarCloseButton)`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

const MenuButton = styled(NavBarOpenButton)`
	position: absolute;
	top: 1rem;
	right: -4rem;
`;

export const NavBar = ({
	links,
	onClose,
	onOpen,
	isNavBarOpen
}: NavBarProps) => {
	return (
		<StyledNav>
			<CloseButton hidden={!isNavBarOpen} onClick={onClose} />
			<MenuButton hidden={isNavBarOpen} onClick={onOpen} />
			<StyledLogo />
			<NavBarLinkItemList links={links} />
			<CopyrightText>
				{`Copyright ©${new Date().getFullYear()} All rights reserved`}
			</CopyrightText>
		</StyledNav>
	);
};

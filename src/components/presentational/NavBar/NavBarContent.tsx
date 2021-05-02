import React, { ReactNode, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { navBarWidth } from "../../../utils/styles/theme";
import { NavBar } from "./NavBar";
import { NavBarLinkItemProps } from "./NavBarLinkItem";

export interface NavBarContentProps {
	children: ReactNode;
	links: NavBarLinkItemProps[];
}

const Container = styled.div`
	overflow-x: hidden;
`;

const closedNavBarStyle = css`
	transform: translateX(-${navBarWidth});
`;

const MovingContainer = styled.div<{ $navBarOpen: boolean }>`
	display: flex;
	height: 100vh;
	transition: transform 0.2s ease-in-out;

	@media (${Breakpoint.DESKTOP_DOWN}) {
		width: calc(100% + ${navBarWidth});
		${(props) => !props.$navBarOpen && closedNavBarStyle}
	}
`;

const Content = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	background-color: #111111;
	flex-grow: 1;
	padding: 0 15rem;

	@media (${Breakpoint.DESKTOP_DOWN}) {
		padding: 0 5rem;
	}
	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		padding: 0;
	}
`;

export const NavBarContent = ({
	children,
	...navBarProps
}: NavBarContentProps) => {
	const [navBarOpen, setNavBarOpen] = useState(false);

	const handleOnClose = useCallback(() => {
		setNavBarOpen(false);
	}, []);

	const handleOnOpen = useCallback(() => {
		setNavBarOpen(true);
	}, []);

	return (
		<Container>
			<MovingContainer $navBarOpen={navBarOpen}>
				<NavBar
					isNavBarOpen={navBarOpen}
					{...navBarProps}
					onClose={handleOnClose}
					onOpen={handleOnOpen}
				/>
				<Content onPointerDown={handleOnClose}>{children}</Content>
			</MovingContainer>
		</Container>
	);
};

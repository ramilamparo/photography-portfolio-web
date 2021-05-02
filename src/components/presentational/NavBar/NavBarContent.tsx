import React, { ReactNode, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { navBarWidth } from "../../../utils/styles/theme";
import { NavBar, NavBarProps } from "./NavBar";

export interface NavBarContentProps extends NavBarProps {
	children: ReactNode;
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

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
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
				<NavBar {...navBarProps} onClose={handleOnClose} onOpen={handleOnOpen} />
				<Content>{children}</Content>
			</MovingContainer>
		</Container>
	);
};

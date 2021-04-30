import React, { ReactNode } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { NavBar, NavBarProps } from "./NavBar";

export interface NavBarContentProps extends NavBarProps {
	children: ReactNode;
}

const Container = styled.div`
	display: flex;
	height: 100vh;

	@media (${Breakpoint.PHONE_ONLY}) {
		flex-direction: column;
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
	return (
		<Container>
			<NavBar {...navBarProps} />
			<Content>{children}</Content>
		</Container>
	);
};

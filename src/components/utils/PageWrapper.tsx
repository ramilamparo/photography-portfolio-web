import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../utils/styles/BreakPoint";
import { NavBarContentContextProvider } from "../presentational/NavBar/NavBarContentContext";

const Container = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	flex-grow: 1;
	padding: 0 15rem;
	height: 100vh;
	width: 100%;

	@media (${Breakpoint.BIG_DESKTOP_DOWN}) {
		padding: 0 5rem;
	}

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		padding: 0;
	}
`;

export interface PageWrapperProps {
	children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
	const [contentElRef, setContentRef] = useState<HTMLDivElement | null>(null);
	return (
		<NavBarContentContextProvider value={{ contentEl: contentElRef }}>
			<Container ref={(e) => setContentRef(e)}>{children}</Container>
		</NavBarContentContextProvider>
	);
};

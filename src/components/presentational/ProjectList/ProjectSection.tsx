import React, { ReactNode } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";

export interface ProjectSectionProps {
	children: ReactNode;
}

const Container = styled.div`
	display: flex;

	@media (${Breakpoint.TABLET_LANDSCAPE_UP}) {
		height: 100vh;
		& > * {
			width: 50%;
		}
		&:nth-of-type(even) {
			flex-direction: row-reverse;
		}
	}

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		flex-direction: column;
	}
`;

export const ProjectSection = ({ children }: ProjectSectionProps) => {
	return <Container>{children}</Container>;
};

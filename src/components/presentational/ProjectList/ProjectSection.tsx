import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ProjectSectionProps {
	children: ReactNode;
}

const Container = styled.div`
	display: flex;
	height: 100vh;
	& > * {
		width: 50%;
	}
	&:nth-of-type(even) {
		flex-direction: row-reverse;
	}
`;

export const ProjectSection = ({ children }: ProjectSectionProps) => {
	return <Container>{children}</Container>;
};

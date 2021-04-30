import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ProjectSectionProps {
	children: ReactNode;
}

const Container = styled.div`
	display: flex;
	padding: 0 10rem;
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

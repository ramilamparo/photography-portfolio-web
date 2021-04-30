import { ReactNode } from "react";
import styled from "styled-components";

export interface ProjectSectionProps {
	children: ReactNode;
}

const Container = styled.div``;

export const ProjectSection = ({ children }: ProjectSectionProps) => {
	return <Container>{children}</Container>;
};

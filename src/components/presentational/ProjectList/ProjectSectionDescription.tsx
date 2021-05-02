import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectSectionDescriptionProps {
	title: string;
	shortDescription: string;
	link: string;
}

const Container = styled.div`
	overflow: hidden;
	position: relative;
`;

const CenterContainer = styled.div`
	padding: 5rem 5rem;
	width: 100%;

	@media (${Breakpoint.TABLET_LANDSCAPE_UP}) {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
`;

const Title = styled(Typography)``;

const StyledShortDescription = styled(Typography)`
	margin: 4rem 0;
`;

const StyledLink = styled(Link)``;

export const ProjectSectionDescription = ({
	link,
	shortDescription,
	title
}: ProjectSectionDescriptionProps) => {
	return (
		<Container>
			<CenterContainer>
				<Title variant="title" component="h2">
					{title}
				</Title>
				<StyledShortDescription variant="quote">
					{shortDescription}
				</StyledShortDescription>
				<StyledLink button to={link}>
					View Portfolio
				</StyledLink>
			</CenterContainer>
		</Container>
	);
};

import React from "react";
import styled from "styled-components";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectSectionDescriptionProps {
	title: string;
	shortDescription: string;
	link: string;
}

const Container = styled.div``;

export const ProjectSectionDescription = ({
	link,
	shortDescription,
	title
}: ProjectSectionDescriptionProps) => {
	return (
		<Container>
			<Typography variant="title">{title}</Typography>
			<Typography variant="quote">{shortDescription}</Typography>
			<Link button to={link}>
				View Portfolio
			</Link>
		</Container>
	);
};

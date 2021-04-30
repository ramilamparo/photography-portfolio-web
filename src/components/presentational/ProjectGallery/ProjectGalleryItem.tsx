import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectGalleryItemProps {
	coverSrc: string;
	title: string;
	link: string;
}

const Container = styled.div`
	position: relative;
	height: 100vh;
	&::before {
		transition-duration: 1s;
		opacity: 0;
		content: "";
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	&:hover {
		&::before {
			opacity: 1;
		}

		& .description-container {
			opacity: 1;
		}
	}
`;

const DescriptionContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0;
	transition-duration: 1s;
`;

const StyledImage = styled(Image)`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const StyledTitle = styled(Typography)`
	font-size: 5rem;
	margin-bottom: 3rem;
`;

const StyledLink = styled(Link)``;

export const ProjectGalleryItem = ({
	coverSrc,
	link,
	title
}: ProjectGalleryItemProps) => {
	return (
		<Container>
			<StyledImage src={coverSrc} alt={title} />
			<DescriptionContainer className="description-container">
				<StyledTitle variant="title">{title}</StyledTitle>
				<StyledLink button to={link}>
					View Portfolio
				</StyledLink>
			</DescriptionContainer>
		</Container>
	);
};

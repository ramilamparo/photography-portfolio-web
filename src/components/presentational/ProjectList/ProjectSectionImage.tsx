import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

export interface ProjectSectionImageProps {
	coverSrc: string;
	title: string;
}

const StyledImage = styled(Image)``;

export const ProjectSectionImage = ({
	coverSrc,
	title
}: ProjectSectionImageProps) => {
	return <StyledImage src={coverSrc} alt={title} />;
};

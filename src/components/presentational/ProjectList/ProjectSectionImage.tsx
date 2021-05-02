import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Image } from "../Image";

export interface ProjectSectionImageProps {
	coverSrc: string;
	title: string;
}

const StyledImage = styled(Image)`
	object-fit: cover;

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		height: 100vh;
	}
`;

export const ProjectSectionImage = ({
	coverSrc,
	title
}: ProjectSectionImageProps) => {
	return <StyledImage src={coverSrc} alt={title} />;
};

import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { Image } from "../Image";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectGalleryItemProps {
	coverSrc: string;
	title: string;
	link: string;
}

const Container = styled.div<{ $isBackdropShown: boolean }>`
	position: relative;
	height: 100%;

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

	@media (${Breakpoint.DESKTOP_DOWN}) {
		&::before,
		& .description-container {
			${(props) => props.$isBackdropShown && "opacity: 1;"}
		}
	}
`;

const DescriptionContainer = styled.div<{ $isShown: boolean }>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition-duration: 1s;
	opacity: 0;

	@media (${Breakpoint.DESKTOP_DOWN}) {
		${(props) => props.$isShown && "opacity: 1;"}
	}
`;

const StyledImage = styled(Image)`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const StyledTitle = styled(Typography)`
	margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
	text-shadow: 1px 1px 0.7rem black;
`;

export const ProjectGalleryItem = ({
	coverSrc,
	link,
	title
}: ProjectGalleryItemProps) => {
	const [isDescriptionShown, setIsDescriptionShown] = useState(false);

	const handlePointerDown = useCallback(() => {
		setIsDescriptionShown(!isDescriptionShown);
	}, [isDescriptionShown]);

	return (
		<Container $isBackdropShown={isDescriptionShown} onClick={handlePointerDown}>
			<StyledImage src={coverSrc} alt={title} />
			<DescriptionContainer
				$isShown={isDescriptionShown}
				className="description-container"
			>
				<StyledTitle variant="title">{title}</StyledTitle>
				<StyledLink button to={link}>
					View Portfolio
				</StyledLink>
			</DescriptionContainer>
		</Container>
	);
};

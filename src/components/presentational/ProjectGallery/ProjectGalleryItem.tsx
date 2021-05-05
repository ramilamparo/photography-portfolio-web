import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { slideUp } from "../../../utils/styles/animations";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { useNavBarContentRef } from "../../hooks/useNavBarContentRef";
import { useOnScrollAppear } from "../../hooks/useOnScroll";
import { Image } from "../Image";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectGalleryItemProps {
	coverSrc: string;
	title: string;
	link: string;
}

const showAnimation = css`
	&:nth-child(odd) {
		animation-name: ${slideUp};
	}
	&:nth-child(even) {
		animation-name: ${slideUp};
	}
	animation-duration: 0.5s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	animation-delay: 0.5s;
`;

const Container = styled.div<{ $isBackdropShown: boolean; $isShown: boolean }>`
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

	@media (${Breakpoint.TABLET_PORTRAIT_UP}) {
		opacity: 0;
		${(props) => props.$isShown && showAnimation}
	}

	@media (${Breakpoint.DESKTOP_UP}) {
		&:hover {
			&::before {
				opacity: 1;
			}

			& .description-container {
				opacity: 1;
			}
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
		${(props) => (props.$isShown ? "opacity: 1;" : "")}
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
	const navBar = useNavBarContentRef();
	const { ref, hasAppeared, isVisible } = useOnScrollAppear<HTMLDivElement>(
		navBar.ref
	);

	return (
		<Container
			ref={ref}
			$isShown={hasAppeared || isVisible}
			$isBackdropShown={isDescriptionShown}
			onClick={handlePointerDown}
		>
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

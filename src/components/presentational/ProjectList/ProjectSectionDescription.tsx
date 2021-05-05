import React from "react";
import styled, { css } from "styled-components";
import { slideUp } from "../../../utils/styles/animations";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { useNavBarContentRef } from "../../hooks/useNavBarContentRef";
import { useOnScrollAppear } from "../../hooks/useOnScroll";
import { Link } from "../Link";
import { Typography } from "../Typography";

export interface ProjectSectionDescriptionProps {
	title: string;
	shortDescription: string;
	link: string;
}

const showAnimation = css`
	animation-name: ${slideUp};
	animation-duration: 0.5s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	animation-delay: 0.2s;
`;

const Container = styled.div<{ $isShown: boolean }>`
	overflow: hidden;
	opacity: 0;
	position: relative;
	${(props) => props.$isShown && showAnimation}
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
	const navBar = useNavBarContentRef();
	const { ref, hasAppeared, isVisible } = useOnScrollAppear<HTMLDivElement>(
		navBar.ref
	);

	return (
		<Container ref={ref} $isShown={isVisible || hasAppeared}>
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

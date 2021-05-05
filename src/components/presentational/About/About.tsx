import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { AboutImage, AboutImageProps } from "./AboutImage";
import { AboutInfo, AboutInfoProps } from "./AboutInfo";

export interface AboutProps extends AboutImageProps, AboutInfoProps {
	className?: string;
}

const Container = styled.div`
	display: flex;

	& > * {
		width: 50%;
		height: 100vh;
	}

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		flex-direction: column;
		& > * {
			width: 100%;
		}
	}
`;

const StyledAboutImage = styled(AboutImage)``;

const StyledAboutInfo = styled(AboutInfo)`
	padding: 5rem;
`;

export const About = ({
	title,
	description,
	fullName,
	src,
	alt,
	className
}: AboutProps) => {
	return (
		<Container className={className}>
			<StyledAboutImage src={src} alt={alt} />
			<StyledAboutInfo
				title={title}
				description={description}
				fullName={fullName}
			/>
		</Container>
	);
};

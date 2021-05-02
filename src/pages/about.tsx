import React from "react";
import styled from "styled-components";
import { AboutImage } from "../components/container/AboutImage";
import { AboutInfo } from "../components/container/AboutInfo";
import { Breakpoint } from "../utils/styles/BreakPoint";

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

const Contact = () => {
	return (
		<Container>
			<StyledAboutImage />
			<StyledAboutInfo />
		</Container>
	);
};

export default Contact;

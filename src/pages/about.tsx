import React from "react";
import styled from "styled-components";
import { AboutImage } from "../components/container/AboutImage";
import { AboutInfo } from "../components/container/AboutInfo";

const Container = styled.div`
	display: flex;
	height: 100vh;
`;

const StyledAboutImage = styled(AboutImage)`
	width: 50%;
`;

const StyledAboutInfo = styled(AboutInfo)`
	width: 50%;
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

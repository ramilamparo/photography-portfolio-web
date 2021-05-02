import React from "react";
import styled from "styled-components";
import { ContactInfo } from "../components/container/ContactInfo";
import { ContactForm } from "../components/container/ContactForm";
import { Breakpoint } from "../utils/styles/BreakPoint";

const Container = styled.div`
	display: flex;
	height: 100vh;

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		flex-direction: column;
	}
`;

const StyledContactInfo = styled(ContactInfo)`
	width: 40%;
	flex-shrink: 0;

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		padding-top: 5rem;
		width: 100%;
	}
`;

const StyledContactForm = styled(ContactForm)`
	flex-grow: 1;
`;

const Contact = () => {
	return (
		<Container>
			<StyledContactInfo />
			<StyledContactForm />
		</Container>
	);
};

export default Contact;

import React from "react";
import styled from "styled-components";
import { ContactInfo } from "../components/container/ContactInfo";
import { ContactForm } from "../components/container/ContactForm";

const Container = styled.div`
	display: flex;
	height: 100vh;
`;

const StyledContactInfo = styled(ContactInfo)`
	width: 33%;
	flex-shrink: 0;
`;

const StyledContactForm = styled(ContactForm)`
	flex-grow: 1;
	padding: 5rem;
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

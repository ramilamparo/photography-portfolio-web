import React from "react";
import styled from "styled-components";
import { ContactInfo, ContactInfoProps } from "./ContactInfo";
import { ContactForm, ContactFormProps } from "./ContactForm";
import { Breakpoint } from "../../../utils/styles/BreakPoint";

export interface ContactProps extends ContactFormProps, ContactInfoProps {
	className?: string;
}

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

export const Contact = ({
	address,
	email,
	onSubmit,
	onChange,
	phone,
	values,
	className
}: ContactProps) => {
	return (
		<Container className={className}>
			<StyledContactInfo address={address} email={email} phone={phone} />
			<StyledContactForm onChange={onChange} onSubmit={onSubmit} values={values} />
		</Container>
	);
};

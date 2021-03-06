import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { mainColor } from "../../../utils/styles/theme";
import { Typography } from "../Typography";
import { ContactInfoItem } from "./ContactInfoItem";

export interface ContactInfoProps {
	address: string;
	phone: string;
	email: string;
	className?: string;
}

const Container = styled.div`
	background-color: ${mainColor};
	padding: 5rem;

	@media (${Breakpoint.DESKTOP_DOWN}) {
		padding: 2rem;
	}
`;

const Title = styled(Typography)`
	color: black;
	margin-bottom: 1rem;
`;

const Subtitle = styled(Typography)`
	color: black;
	font-size: 1.5rem;
`;

export const ContactInfo = ({
	className,
	email,
	address,
	phone
}: ContactInfoProps) => {
	return (
		<Container className={className}>
			<Title variant="title2" component="h1">
				Let's get in touch
			</Title>
			<Subtitle>We're open for any suggestion or just to have a chat</Subtitle>
			<ContactInfoItem title="Email" iconName="alternate_email">
				{email}
			</ContactInfoItem>
			<ContactInfoItem title="Address" iconName="location_on">
				{address}
			</ContactInfoItem>
			<ContactInfoItem title="Phone" iconName="phone">
				{phone}
			</ContactInfoItem>
		</Container>
	);
};

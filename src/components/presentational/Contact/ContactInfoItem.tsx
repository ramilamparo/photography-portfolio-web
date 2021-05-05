import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

export interface ContactInfoItemProps {
	title: string;
	iconName: string;
	children: string;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 5rem 0;
`;

const ContactIcon = styled(Icon)`
	position: relative;
	font-size: 2.5rem;
	margin: 1rem 2rem 1rem 1rem;
	&::before {
		position: absolute;
		content: "";
		border: 1px solid black;
		opacity: 0.2;
		width: 180%;
		height: 180%;
		border-radius: 10000px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const ContactDescriptionTypography = styled(Typography)``;

const ContactDescriptionTitle = styled.span`
	color: black;
	font-weight: 800;
	position: inline;
`;

const ContactDescription = styled.span`
	color: black;
`;

export const ContactInfoItem = ({
	iconName,
	children,
	title
}: ContactInfoItemProps) => {
	return (
		<Container>
			<ContactIcon>{iconName}</ContactIcon>
			<ContactDescriptionTypography>
				<ContactDescriptionTitle>{title}: </ContactDescriptionTitle>
				<ContactDescription>{children}</ContactDescription>
			</ContactDescriptionTypography>
		</Container>
	);
};

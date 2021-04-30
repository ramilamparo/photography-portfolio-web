import React from "react";
import styled from "styled-components";
import { AboutInfoTitle } from "./AboutInfoTitle";
import { AboutInfoDescription } from "./AboutInfoDescription";

export interface AboutInfoProps {
	title: string;
	fullName: string;
	description: string;
	className?: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const AboutInfo = ({
	className,
	fullName,
	title,
	description
}: AboutInfoProps) => {
	return (
		<Container className={className}>
			<div>
				<AboutInfoTitle fullName={fullName}>{title}</AboutInfoTitle>
				<AboutInfoDescription>{description}</AboutInfoDescription>
			</div>
		</Container>
	);
};

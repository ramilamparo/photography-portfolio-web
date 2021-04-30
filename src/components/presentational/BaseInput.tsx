import React, { ReactNode } from "react";
import styled from "styled-components";
import { InputLabel } from "./InputLabel";

export interface BaseInputProps {
	children: ReactNode;
	className?: string;
	htmlFor: string;
	label: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	& label {
		margin-bottom: 1rem;
	}
`;

export const BaseInput = ({
	children,
	className,
	htmlFor,
	label
}: BaseInputProps) => {
	return (
		<Container className={className}>
			<InputLabel htmlFor={htmlFor}>{label}</InputLabel>
			{children}
		</Container>
	);
};

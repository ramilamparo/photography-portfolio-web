import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { useField } from "react-form";
import { BaseInput } from "./BaseInput";
import { Typography } from "./Typography";

export interface TextInputProps {
	type?: "text" | "email";
	name: string;
	label: string;
	className?: string;
	placeholder?: string;
	required?: boolean;
}

export const baseInputStyle = css`
	${Typography.baseTypographyStyle}

	background-color: transparent;
	border-width: 0 0 1px 0;
	border-color: rgba(255, 255, 255, 0.1);
	border-style: solid;
	outline: none;

	color: rgba(255, 255, 255, 0.6);

	&:focus {
		color: rgba(255, 255, 255, 1);
	}
`;

const StyledInput = styled.input`
	${baseInputStyle}
`;

export const TextInput = ({
	name,
	label,
	className,
	placeholder,
	required,
	type = "text"
}: TextInputProps) => {
	const field = useField(name, { defaultValue: "" });

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			field.setFieldValue(e.target.value);
		},
		[field]
	);

	return (
		<BaseInput htmlFor={name} label={label} className={className}>
			<StyledInput
				id={name}
				required={required}
				placeholder={placeholder}
				type={type}
				value={field.value}
				onChange={handleChange}
			/>
		</BaseInput>
	);
};

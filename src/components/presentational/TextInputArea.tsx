import React, { useCallback } from "react";
import styled from "styled-components";
import { useField } from "react-form";
import { BaseInput } from "./BaseInput";
import { baseInputStyle } from "./TextInput";

export interface TextInputAreaProps {
	label: string;
	name: string;
	required?: boolean;
	className?: string;
	placeholder?: string;
}

const StyledTextArea = styled.textarea`
	${baseInputStyle}
`;

export const TextInputArea = ({
	label,
	className,
	name,
	required,
	placeholder
}: TextInputAreaProps) => {
	const field = useField(name, { defaultValue: "" });

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			field.setFieldValue(e.target.value);
		},
		[field]
	);

	return (
		<BaseInput htmlFor={name} label={label} className={className}>
			<StyledTextArea
				required={required}
				onChange={handleChange}
				placeholder={placeholder}
				id={name}
				value={field.value}
			/>
		</BaseInput>
	);
};

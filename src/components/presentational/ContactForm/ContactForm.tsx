import React, { useCallback } from "react";
import { FormProviderProps, FormProvider } from "react-form";
import styled from "styled-components";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { TextInputArea } from "../TextInputArea";
import { Typography } from "../Typography";

export interface ContactFormValues {
	fullName: string;
	email: string;
	subject: string;
	message: string;
}

export interface ContactFormProps extends FormProviderProps<ContactFormValues> {
	onSubmit: () => void;
	className?: string;
}

const InputContainer = styled.div`
	display: grid;
	grid-gap: 3rem;

	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"input-1 input-2"
		"input-3 input-3"
		"input-4 input-4";
	margin: 3rem 0;
`;

const FullNameInput = styled(TextInput)`
	grid-area: input-1;
`;
const EmailInput = styled(TextInput)`
	grid-area: input-2;
`;
const SubjectInput = styled(TextInput)`
	grid-area: input-3;
`;
const MessageInput = styled(TextInputArea)`
	grid-area: input-4;
`;
const SubmitButton = styled(Button)``;

const Title = styled(Typography)``;

export const ContactForm = ({
	onSubmit,
	className,

	...formProps
}: ContactFormProps) => {
	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onSubmit();
		},
		[onSubmit]
	);
	return (
		<form onSubmit={handleSubmit} className={className}>
			<Title component="h2" variant="title">
				Send me a message...
			</Title>
			<InputContainer>
				<FormProvider {...formProps}>
					<FullNameInput
						required
						placeholder="Name"
						label="Full Name"
						name="fullName"
					/>
					<EmailInput
						required
						placeholder="Email"
						label="Email"
						type="email"
						name="email"
					/>
					<SubjectInput
						required
						placeholder="Subject"
						label="Subject"
						name="subject"
					/>
					<MessageInput
						required
						placeholder="Message"
						label="Message"
						name="message"
					/>
				</FormProvider>
			</InputContainer>
			<SubmitButton>Send Message</SubmitButton>
		</form>
	);
};

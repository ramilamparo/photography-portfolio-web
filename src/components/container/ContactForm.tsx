import React, { useCallback } from "react";
import { useFormState } from "react-form";
import {
	ContactForm as ContactFormPresentational,
	ContactFormValues
} from "../presentational/ContactForm/ContactForm";

export interface ContactFormProps {
	className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
	const form = useFormState<ContactFormValues>({
		values: {
			fullName: "",
			email: "",
			subject: "",
			message: ""
		}
	});
	const handleSubmit = useCallback(() => {
		console.log(form.values);
	}, [form]);
	return (
		<ContactFormPresentational
			className={className}
			onChange={form.setValues}
			values={form.values}
			touched={form.touched}
			errors={form.errors}
			onSubmit={handleSubmit}
		/>
	);
};

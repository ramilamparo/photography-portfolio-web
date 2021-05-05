import React, { useCallback } from "react";
import { useFormState } from "react-form";
import { useContactInfo } from "../hooks/useContactInfo";
import { Contact as ContactPresentational } from "../presentational/Contact/Contact";
import { ContactFormValues } from "../presentational/Contact/ContactForm";

export interface ContactProps {
	className?: string;
}

export const Contact = ({ className }: ContactProps) => {
	const about = useContactInfo();
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
		<ContactPresentational
			className={className}
			onChange={form.setValues}
			values={form.values}
			touched={form.touched}
			errors={form.errors}
			onSubmit={handleSubmit}
			address={about.address}
			email={about.email}
			phone={about.phone}
		/>
	);
};

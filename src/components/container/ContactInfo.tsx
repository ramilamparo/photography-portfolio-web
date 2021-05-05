import React from "react";
import { useContactInfo } from "../hooks/useContactInfo";
import { ContactInfo as ContactInfoPresentational } from "../presentational/Contact/ContactInfo";

export interface ContactInfoProps {
	className?: string;
}

export const ContactInfo = ({ className }: ContactInfoProps) => {
	const contactInfo = useContactInfo();
	return <ContactInfoPresentational className={className} {...contactInfo} />;
};

import React from "react";
import { useAboutMe } from "../hooks/useAboutMe";
import { About as AboutPresentational } from "../presentational/About/About";

interface AboutProps {
	className?: string;
}

export const About = ({ className }: AboutProps) => {
	const aboutInfo = useAboutMe();
	return (
		<AboutPresentational
			className={className}
			src={aboutInfo.aboutImage.large || aboutInfo.aboutImage.original}
			alt={aboutInfo.aboutImage.alt}
			title={aboutInfo.title}
			description={aboutInfo.description}
			fullName={aboutInfo.fullName}
		/>
	);
};

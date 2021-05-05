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
			src={aboutInfo.aboutImage}
			alt={aboutInfo.fullName}
			title={aboutInfo.title}
			description={aboutInfo.description}
			fullName={aboutInfo.fullName}
		/>
	);
};

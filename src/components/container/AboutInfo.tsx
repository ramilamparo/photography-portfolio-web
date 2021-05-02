import React from "react";
import { useAboutMe } from "../hooks/useAboutMe";
import { AboutInfo as AboutInfoPresentational } from "../presentational/About/AboutInfo";

interface AboutInfoProps {
	className?: string;
}

export const AboutInfo = ({ className }: AboutInfoProps) => {
	const aboutInfo = useAboutMe();
	return (
		<AboutInfoPresentational
			className={className}
			title={aboutInfo.title}
			description={aboutInfo.description}
			fullName={aboutInfo.fullName}
		/>
	);
};

import React from "react";
import { useAboutMe } from "../hooks/useAboutMe";
import { AboutImage as AboutImagePresentational } from "../presentational/About/AboutImage";

interface AboutImageProps {
	className: string;
}

export const AboutImage = ({ className }: AboutImageProps) => {
	const aboutInfo = useAboutMe();
	return (
		<AboutImagePresentational className={className} src={aboutInfo.aboutImage} />
	);
};

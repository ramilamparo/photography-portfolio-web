import React from "react";
import { Image } from "../presentational/Image";
import { useAboutMe } from "../hooks/useAboutMe";

export interface LogoProps {
	className?: string;
}

export const Logo = ({ className }: LogoProps) => {
	const aboutMe = useAboutMe();
	return (
		<Image
			src={aboutMe.avatarImage.thumbnail || aboutMe.avatarImage.original}
			alt="Home"
			className={className}
		/>
	);
};

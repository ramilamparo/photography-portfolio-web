import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

export interface AboutImageProps {
	src: string;
	alt: string;
	className?: string;
}

const StyledImage = styled(Image)`
	object-fit: cover;
`;

export const AboutImage = ({ className, alt, src }: AboutImageProps) => {
	return <StyledImage className={className} alt={alt} src={src} />;
};

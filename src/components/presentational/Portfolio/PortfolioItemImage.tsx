import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

export interface PortfolioItemImageProps {
	src: string;
	alt: string;
}

const StyledImage = styled(Image)`
	width: 100%;
`;

export const PortfolioItemImage = ({ src, alt }: PortfolioItemImageProps) => {
	return <StyledImage src={src} alt={alt} />;
};

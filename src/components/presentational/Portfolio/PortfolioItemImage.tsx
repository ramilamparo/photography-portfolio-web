import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

export interface PortfolioItemImageProps {
	src: string;
	alt: string;
}

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledImage = styled(Image)`
	height: 100vh;
	object-fit: contain;
`;

export const PortfolioItemImage = ({ src, alt }: PortfolioItemImageProps) => {
	return (
		<Container>
			<StyledImage src={src} alt={alt} />
		</Container>
	);
};

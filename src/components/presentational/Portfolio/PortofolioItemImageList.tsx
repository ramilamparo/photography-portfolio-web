import React, { useMemo } from "react";
import styled from "styled-components";
import {
	PortfolioItemImage,
	PortfolioItemImageProps
} from "./PortfolioItemImage";

export interface PortfolioItemImageListProps {
	images: Pick<PortfolioItemImageProps, "src" | "alt">[];
}

const Container = styled.div`
	font-size: 0;
`;

export const PortfolioItemImageList = ({
	images
}: PortfolioItemImageListProps) => {
	const imageNodes = useMemo(() => {
		return images.map((imageProps) => {
			return <PortfolioItemImage key={imageProps.src} {...imageProps} />;
		});
	}, [images]);

	return <Container>{imageNodes}</Container>;
};

import React from "react";
import styled from "styled-components";
import { ImageProps, Image } from "../Image";
import { Typography } from "../Typography";

export interface GridGalleryImageProps extends ImageProps {
	areaName: string;
}

const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: 0.5s ease-out;
	&:hover {
		transform: scale(1.2);
	}
`;

const ImageTitle = styled(Typography)`
	position: absolute;
	top: 5rem;
	right: 5rem;
	color: white;
	text-shadow: 1px 1px 1px;
	z-index: 1;
`;

const ImageContainer = styled.div`
	overflow: hidden;
	position: relative;
`;

export const GridGalleryImage = ({
	alt,
	src,
	className,
	areaName
}: GridGalleryImageProps) => {
	return (
		<ImageContainer
			style={{
				gridArea: areaName
			}}
			className={className}
		>
			<ImageTitle>{areaName}</ImageTitle>
			<StyledImage alt={alt} src={src} />
		</ImageContainer>
	);
};

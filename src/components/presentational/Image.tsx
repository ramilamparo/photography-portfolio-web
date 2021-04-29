import React, { useMemo } from "react";

export interface PlaceholderImage {
	x: number;
	y: number;
}

export interface ImageProps {
	alt: string;
	src: string | PlaceholderImage;
	className?: string;
}

export const Image = ({ alt, src, className }: ImageProps) => {
	const srcUri = useMemo(() => {
		if (typeof src === "string") {
			return src;
		}
		return `https://via.placeholder.com/${src.x}x${src.y}`;
	}, [src]);

	return <img src={srcUri} alt={alt} className={className} />;
};

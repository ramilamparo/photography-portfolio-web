import React from "react";

export interface ImageProps {
	alt: string;
	src: string;
	className?: string;
}

export const Image = ({ alt, src, className }: ImageProps) => {
	return <img src={src} alt={alt} className={className} />;
};

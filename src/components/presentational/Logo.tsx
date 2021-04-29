import React from "react";
import { Image } from "./Image";

export interface LogoProps {
	className?: string;
}

export const Logo = ({ className }: LogoProps) => {
	return <Image src={{ x: 800, y: 500 }} alt="Home" className={className} />;
};

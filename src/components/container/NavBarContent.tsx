import React, { ReactNode, useRef } from "react";
import { NavBarContent as NavBarContentPresentational } from "../presentational/NavBar/NavBarContent";
import { NavBarLinkItemProps } from "../presentational/NavBar/NavBarLinkItem";

export interface NavBarContentProps {
	children: ReactNode;
}

export const NavBarContent = ({ children }: NavBarContentProps) => {
	const { current: links } = useRef<NavBarLinkItemProps[]>([
		{
			label: "Home",
			path: "/"
		},
		{
			label: "Gallery",
			path: "/gallery"
		},
		{
			label: "About",
			path: "/about"
		},
		{
			label: "Contact",
			path: "/contact"
		}
	]);

	return (
		<NavBarContentPresentational links={links}>
			{children}
		</NavBarContentPresentational>
	);
};

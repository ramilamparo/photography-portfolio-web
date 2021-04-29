import React, { ReactNode, useRef } from "react";
import { NavBarContent as NavBarContentPresentational } from "../presentational/NavBar/NavBarContent";
import { NavBarLinkItemProps } from "../presentational/NavBar/NavBarLinkItem";

export interface NavBarContentProps {
	children: ReactNode;
}

export const NavBarContent = ({ children }: NavBarContentProps) => {
	const { current: links } = useRef<NavBarLinkItemProps[]>([
		{
			label: "Projects",
			path: "/projects"
		},
		{
			label: "Instagram",
			path: "/instagram"
		},
		{
			label: "About",
			path: "/about"
		}
	]);

	return (
		<NavBarContentPresentational links={links}>
			{children}
		</NavBarContentPresentational>
	);
};

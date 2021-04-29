import React, { ReactNode } from "react";
import { NavBarContent as NavBarContentPresentational } from "../presentational/NavBar/NavBarContent";

export interface NavBarContentProps {
	children: ReactNode;
}

export const NavBarContent = ({ children }: NavBarContentProps) => {
	return (
		<NavBarContentPresentational>{children}</NavBarContentPresentational>
	);
};

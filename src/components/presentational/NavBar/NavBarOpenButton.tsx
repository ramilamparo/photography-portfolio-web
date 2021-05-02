import React from "react";
import { NavBarButton } from "./NavBarButton";

export interface NavBarOpenButtonProps {
	onClick?: () => void;
	className?: string;
	hidden: boolean;
}

export const NavBarOpenButton = (props: NavBarOpenButtonProps) => {
	return (
		<NavBarButton aria-label="Open menu" {...props}>
			menu
		</NavBarButton>
	);
};

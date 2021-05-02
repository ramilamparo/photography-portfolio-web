import React from "react";
import { NavBarButton } from "./NavBarButton";

export interface NavBarCloseButtonProps {
	onClick?: () => void;
	className?: string;
	hidden: boolean;
}

export const NavBarCloseButton = (props: NavBarCloseButtonProps) => {
	return (
		<NavBarButton aria-label="Close menu" {...props}>
			close
		</NavBarButton>
	);
};

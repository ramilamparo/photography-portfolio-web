import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { baseButtonStyle } from "../Button";
import { Icon } from "../Icon";

export interface NavBarButtonProps {
	onClick?: () => void;
	className?: string;
	"aria-label": string;
	children: string;
}

const StyledButton = styled.button`
	${baseButtonStyle}
	background-color: transparent;
	z-index: 1;
`;

const StyledIcon = styled(Icon)`
	font-size: 3rem;
	color: white;
	visibility: hidden;

	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		visibility: visible;
	}
`;

export const NavBarButton = ({
	children,
	...buttonProps
}: NavBarButtonProps) => {
	return (
		<StyledButton {...buttonProps}>
			<StyledIcon>{children}</StyledIcon>
		</StyledButton>
	);
};

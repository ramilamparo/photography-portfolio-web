import React from "react";
import styled, { css } from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";
import { baseButtonStyle } from "../Button";
import { Icon } from "../Icon";

export interface NavBarButtonProps {
	onClick?: () => void;
	className?: string;
	"aria-label": string;
	children: string;
	hidden: boolean;
}

const hiddenStyle = css`
	visibility: hidden;
`;

const StyledButton = styled.button<{ $hidden: boolean }>`
	${baseButtonStyle}
	background-color: transparent;
	z-index: 1;
	visibility: hidden;

	@media (${Breakpoint.DESKTOP_DOWN}) {
		visibility: visible;
		${(props) => props.$hidden && hiddenStyle}
	}
`;

const StyledIcon = styled(Icon)`
	font-size: 3rem;
	color: white;
`;

export const NavBarButton = ({
	children,
	hidden,
	...buttonProps
}: NavBarButtonProps) => {
	return (
		<StyledButton $hidden={hidden} {...buttonProps}>
			<StyledIcon>{children}</StyledIcon>
		</StyledButton>
	);
};

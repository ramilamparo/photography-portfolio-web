import React from "react";
import styled from "styled-components";
import { Typography } from "../Typography";

export interface AboutInfoDescriptionProps {
	children: string;
}

const StyledTypography = styled(Typography)`
	color: #888;
	line-height: 3rem;
`;

export const AboutInfoDescription = ({
	children
}: AboutInfoDescriptionProps) => {
	return <StyledTypography>{children}</StyledTypography>;
};

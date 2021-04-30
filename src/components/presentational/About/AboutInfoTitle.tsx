import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { mainColor } from "../../../utils/styles/theme";
import { Typography } from "../Typography";

export interface AboutInfoTitleProps {
	children: string;
	fullName: string;
}

const StyledTypography = styled(Typography)`
	margin-bottom: 3rem;
`;

const FullName = styled.span`
	color: ${mainColor};
`;

export const AboutInfoTitle = ({ children, fullName }: AboutInfoTitleProps) => {
	const finalText = useMemo(() => {
		const splitName = children.split(fullName);

		if (splitName.length >= 2) {
			const nodes: ReactNode[] = [];

			nodes.push(splitName[0]);
			nodes.push(<FullName>{fullName}</FullName>);
			for (let i = 1; i < splitName.length; i++) {
				nodes.push(splitName[i]);
			}

			return nodes;
		}

		return children;
	}, [children, fullName]);
	return (
		<StyledTypography variant="title" component="h1">
			{finalText}
		</StyledTypography>
	);
};

import React, { useMemo } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { Typography } from "../Typography";

export interface PortfolioItemDescriptionProps {
	title: string;
	description: string;
	date: Date;
}

const Container = styled.div`
	padding: 5rem;
`;

const Description = styled(Typography)`
	margin-top: 5rem;
`;

export const PortfolioItemDescription = ({
	title,
	date,
	description
}: PortfolioItemDescriptionProps) => {
	const dateString = useMemo(() => {
		return format(date, "MMM do, yyyy");
	}, [date]);

	return (
		<Container>
			<Typography component="h1" variant="title2">
				{title}
			</Typography>
			<Typography variant="caption">{dateString}</Typography>
			<Description>{description}</Description>
		</Container>
	);
};

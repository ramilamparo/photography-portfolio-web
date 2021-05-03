import React from "react";
import styled from "styled-components";
import {
	PortfolioItemDescription,
	PortfolioItemDescriptionProps
} from "./PortfolioItemDescription";
import {
	PortfolioItemImageList,
	PortfolioItemImageListProps
} from "./PortofolioItemImageList";

export interface PortfolioItemTemplateProps
	extends PortfolioItemDescriptionProps,
		PortfolioItemImageListProps {}

const Container = styled.div``;

export const PortfolioItemTemplate = ({
	date,
	description,
	title,
	images
}: PortfolioItemTemplateProps) => {
	return (
		<Container>
			<PortfolioItemDescription
				date={date}
				title={title}
				description={description}
			/>
			<PortfolioItemImageList images={images} />
		</Container>
	);
};

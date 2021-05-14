import React from "react";
import { graphql } from "gatsby";
import { PortfolioItemTemplate } from "../presentational/Portfolio/PortfolioItemTemplate";
import { ProjectItem, StrapiProjectItem } from "../../models/ProjectItem";
import { PageWrapper } from "../utils/PageWrapper";

export interface PortfolioItemProps {
	data: {
		strapi: {
			portfolio: StrapiProjectItem;
		};
	};
}

const PortfolioItem = ({ data }: PortfolioItemProps) => {
	const item = ProjectItem.fromStrapi(data.strapi.portfolio);
	return (
		<PageWrapper>
			<PortfolioItemTemplate
				title={item.title}
				description={item.description}
				date={item.date}
				images={item.images.map((image, index) => ({
					src: image.original,
					alt: `${item.title} ${index + 1}`
				}))}
			/>
		</PageWrapper>
	);
};

export default PortfolioItem;

export const query = graphql`
	query($portfolioId: ID!) {
		strapi {
			portfolio(id: $portfolioId) {
				cover {
					url
					formats
				}
				images {
					url
					formats
				}
				title
				description
				shortDescription
				id
				date
			}
		}
	}
`;

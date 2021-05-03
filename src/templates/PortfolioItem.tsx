import React from "react";
import { PortfolioItemTemplate } from "../components/presentational/Portfolio/PortfolioItemTemplate";
import { ProjectItem } from "../models/ProjectItem";

const PortfolioItem = () => {
	const portfolioItem = ProjectItem.getOneRandom();

	return (
		<PortfolioItemTemplate
			title={portfolioItem.title}
			description={portfolioItem.description}
			date={portfolioItem.date}
			images={portfolioItem.images}
		/>
	);
};

export default PortfolioItem;

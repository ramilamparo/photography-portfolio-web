import { useStaticQuery, graphql } from "gatsby";
import { ProjectItem, StrapiProjectItem } from "../../models/ProjectItem";

const query = graphql`
	query {
		strapi {
			portfolios {
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

interface QueryResult {
	strapi: {
		portfolios: StrapiProjectItem[];
	};
}

export const useProjectGallery = (): ProjectItem[] => {
	const response = useStaticQuery<QueryResult>(query);

	return response.strapi.portfolios.map((item) => {
		return ProjectItem.fromStrapi(item);
	});
};

import { graphql, useStaticQuery } from "gatsby";
import { AboutMe } from "../../models/AboutMe";
import { StrapiPhoto } from "../../models/StrapiPhoto";
import { StrapiMedia } from "../../typings/Strapi";

const query = graphql`
	query {
		strapi {
			aboutMe {
				fullName
				description
				avatar {
					url
					formats
				}
				cover {
					url
					formats
				}
				title
			}
		}
	}
`;

interface QueryResult {
	strapi: {
		aboutMe: {
			fullName: string;
			description: string;
			avatar: StrapiMedia;
			cover: StrapiMedia;
			title: string;
		};
	};
}

export const useAboutMe = (): AboutMe => {
	const response = useStaticQuery<QueryResult>(query);
	const {
		title,
		fullName,
		avatar,
		cover,
		description
	} = response.strapi.aboutMe;
	return AboutMe.fromObject({
		aboutImage: StrapiPhoto.fromStrapiMedia(title, cover),
		avatarImage: StrapiPhoto.fromStrapiMedia(`${title} avatar`, avatar),
		description: description,
		fullName: fullName,
		title: title
	});
};

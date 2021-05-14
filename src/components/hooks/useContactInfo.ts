import { graphql, useStaticQuery } from "gatsby";
import { ContactInfo } from "../../models/ContactInfo";

const query = graphql`
	query {
		strapi {
			aboutMe {
				phoneNumber
				address
				email
			}
		}
	}
`;

interface QueryResult {
	strapi: {
		aboutMe: {
			phoneNumber: string;
			address: string;
			email: string;
		};
	};
}

export const useContactInfo = (): ContactInfo => {
	const response = useStaticQuery<QueryResult>(query);
	const { address, email, phoneNumber } = response.strapi.aboutMe;

	return ContactInfo.fromObject({
		address: address,
		email: email,
		phone: phoneNumber
	});
};

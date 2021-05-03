import { ContactInfo } from "../../models/ContactInfo";

export const useContactInfo = (): ContactInfo => {
	return ContactInfo.getRandom();
};

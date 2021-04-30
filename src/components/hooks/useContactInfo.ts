import * as faker from "faker";
export interface ContactInfo {
	address: string;
	phone: string;
	email: string;
}

export const useContactInfo = (): ContactInfo => {
	return {
		address: faker.address.streetAddress(true),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber()
	};
};

import * as faker from "faker";

export interface ContactInfoAttributes {
	address: string;
	phone: string;
	email: string;
}

export class ContactInfo implements ContactInfoAttributes {
	public address: string;
	public phone: string;
	public email: string;

	private constructor(attributes: ContactInfoAttributes) {
		this.address = attributes.address;
		this.phone = attributes.phone;
		this.email = attributes.email;
	}

	public static getRandom = () => {
		return new ContactInfo({
			address: faker.address.streetAddress(true),
			email: faker.internet.email(),
			phone: faker.phone.phoneNumber()
		});
	};
}

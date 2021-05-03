import * as faker from "faker";
import { RandomUtils } from "../utils/RandomUtils";

export interface AboutMeAttributes {
	avatarUrl: string;
	aboutImage: string;
	description: string;
	fullName: string;
	title: string;
}

export class AboutMe implements AboutMeAttributes {
	public avatarUrl: string;
	public aboutImage: string;
	public description: string;
	public fullName: string;
	public title: string;
	private constructor(attributes: AboutMeAttributes) {
		this.avatarUrl = attributes.avatarUrl;
		this.aboutImage = attributes.aboutImage;
		this.description = attributes.description;
		this.fullName = attributes.fullName;
		this.title = attributes.title;
	}

	private static fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;

	public static getRandom = () => {
		return new AboutMe({
			avatarUrl: faker.image.avatar(),
			aboutImage: faker.image.people(),
			description: faker.lorem.paragraph(
				RandomUtils.generateRandomNumberBetween(1, 4)
			),
			fullName: AboutMe.fullName,
			title: `Hello! I'm ${AboutMe.fullName}. ${faker.lorem.sentences(
				RandomUtils.generateRandomNumberBetween(1, 2)
			)}`
		});
	};
}

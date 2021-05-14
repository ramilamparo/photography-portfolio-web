import * as faker from "faker";
import { RandomUtils } from "../utils/RandomUtils";
import { StrapiPhoto } from "./StrapiPhoto";

export interface AboutMeAttributes {
	avatarImage: StrapiPhoto;
	aboutImage: StrapiPhoto;
	description: string;
	fullName: string;
	title: string;
}

export class AboutMe implements AboutMeAttributes {
	public avatarImage: StrapiPhoto;
	public aboutImage: StrapiPhoto;
	public description: string;
	public fullName: string;
	public title: string;

	private constructor(attributes: AboutMeAttributes) {
		this.avatarImage = attributes.avatarImage;
		this.aboutImage = attributes.aboutImage;
		this.description = attributes.description;
		this.fullName = attributes.fullName;
		this.title = attributes.title;
	}

	public static fromObject = (attributes: AboutMeAttributes) => {
		return new AboutMe(attributes);
	};

	private static fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;

	public static getRandom = () => {
		return new AboutMe({
			avatarImage: StrapiPhoto.getRandom(),
			aboutImage: StrapiPhoto.getRandom(),
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

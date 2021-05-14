import * as faker from "faker";
import { StrapiMedia } from "../typings/Strapi";
import { RandomUtils } from "../utils/RandomUtils";
import { StrapiPhoto } from "./StrapiPhoto";

export interface ProjectItemAttributes {
	id: string;
	cover: StrapiPhoto;
	images: StrapiPhoto[];
	title: string;
	description: string;
	shortDescription: string;
	date: Date;
	link: string;
}

export interface StrapiProjectItem {
	cover: StrapiMedia;
	images: StrapiMedia[];
	title: string;
	description: string;
	shortDescription: string;
	id: string;
	date: string;
}

export class ProjectItem implements ProjectItemAttributes {
	public id: string;
	public date: Date;
	public cover: StrapiPhoto;
	public images: StrapiPhoto[];
	public title: string;
	public description: string;
	public shortDescription: string;
	public link: string;

	private constructor(attributes: ProjectItemAttributes) {
		this.id = attributes.id;
		this.date = attributes.date;
		this.cover = attributes.cover;
		this.images = attributes.images;
		this.title = attributes.title;
		this.description = attributes.description;
		this.shortDescription = attributes.shortDescription;
		this.link = attributes.link;
	}

	public static getManyRandom = (count: number) => {
		const gallery: ProjectItem[] = [];
		for (let i = 0; i < count; i++) {
			gallery.push(ProjectItem.getOneRandom());
		}
		return gallery;
	};

	public static getOneRandom = () => {
		const images: StrapiPhoto[] = [];
		const randomNumber = RandomUtils.generateRandomNumberBetween(4, 9);
		for (let j = 0; j < randomNumber; j++) {
			images.push(getRandomImage());
		}
		const title = getRandomTitle();
		const randomAttributes: ProjectItemAttributes = {
			id: faker.lorem.slug(),
			cover: images[0],
			description: getRandomDescription(),
			images,
			shortDescription: getRandomShortDescription(),
			title,
			date: faker.date.past(),
			link: `#${title}`
		};

		return new ProjectItem(randomAttributes);
	};

	public static fromObject = (attributes: ProjectItemAttributes) => {
		return new ProjectItem(attributes);
	};

	public static fromStrapi = (item: StrapiProjectItem) => {
		return ProjectItem.fromObject({
			cover: StrapiPhoto.fromStrapiMedia(`${item.title} cover`, item.cover),
			date: new Date(item.date),
			description: item.description,
			id: item.id,
			images: item.images.map((media, index) =>
				StrapiPhoto.fromStrapiMedia(`${item.title} ${index + 1}`, media)
			),
			shortDescription: item.shortDescription,
			title: item.title,
			link: `/portfolios/${item.id}`
		});
	};
}

const getRandomTitle = () => {
	return faker.lorem.words(RandomUtils.generateRandomNumberBetween(1, 4));
};

const getRandomImage = (): StrapiPhoto => {
	return StrapiPhoto.getRandom();
};

const getRandomShortDescription = () => {
	return faker.lorem.paragraph(RandomUtils.generateRandomNumberBetween(1, 3));
};

const getRandomDescription = () => {
	return faker.lorem.paragraphs(RandomUtils.generateRandomNumberBetween(3, 7));
};

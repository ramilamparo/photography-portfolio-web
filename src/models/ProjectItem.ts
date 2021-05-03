import * as faker from "faker";
import { RandomUtils } from "../utils/RandomUtils";

export interface ProjectPhoto {
	src: string;
	alt: string;
}

export interface ProjectItemAttributes {
	id: string;
	cover: ProjectPhoto;
	images: ProjectPhoto[];
	title: string;
	description: string;
	shortDescription: string;
	date: Date;
}

export class ProjectItem implements ProjectItemAttributes {
	public id: string;
	public date: Date;
	public cover: ProjectPhoto;
	public images: ProjectPhoto[];
	public title: string;
	public description: string;
	public shortDescription: string;

	private constructor(attributes: ProjectItemAttributes) {
		this.id = attributes.id;
		this.date = attributes.date;
		this.cover = attributes.cover;
		this.images = attributes.images;
		this.title = attributes.title;
		this.description = attributes.description;
		this.shortDescription = attributes.shortDescription;
	}

	public static getManyRandom = (count: number) => {
		const gallery: ProjectItem[] = [];
		for (let i = 0; i < count; i++) {
			gallery.push(ProjectItem.getOneRandom());
		}
		return gallery;
	};

	public static getOneRandom = () => {
		const images: ProjectPhoto[] = [];
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
			date: faker.date.past()
		};

		return new ProjectItem(randomAttributes);
	};
}

const getRandomTitle = () => {
	return faker.lorem.words(RandomUtils.generateRandomNumberBetween(1, 4));
};

const getRandomImage = (): ProjectPhoto => {
	const sizes = [
		[1080, 566],
		[1080, 1350],
		[1080, 1080]
	];

	const sizeIndex = RandomUtils.generateRandomNumberBetween(0, 2);

	const [x, y] = sizes[sizeIndex];

	return {
		src: `${faker.image.nature(x, y)}`,
		alt: faker.lorem.text()
	};
};

const getRandomShortDescription = () => {
	return faker.lorem.paragraph(RandomUtils.generateRandomNumberBetween(1, 3));
};

const getRandomDescription = () => {
	return faker.lorem.paragraphs(RandomUtils.generateRandomNumberBetween(3, 7));
};

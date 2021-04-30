import { useRef } from "react";
import * as faker from "faker";
import { RandomUtils } from "../../utils/RandomUtils";

export interface ProjectGallery {
	coverSrc: string;
	imagesSrc: string[];
	title: string;
	description: string;
	shortDescription: string;
}

const getRandomTitle = () => {
	return faker.lorem.words(RandomUtils.generateRandomNumberBetween(1, 4));
};

const getRandomImage = () => {
	const sizes = [
		[1080, 566],
		[1080, 1350],
		[1080, 1080]
	];

	const sizeIndex = RandomUtils.generateRandomNumberBetween(0, 2);

	const [x, y] = sizes[sizeIndex];

	return `${faker.image.nature(x, y)}`;
};

const getRandomShortDescription = () => {
	return faker.lorem.paragraph(RandomUtils.generateRandomNumberBetween(1, 3));
};

const getRandomDescription = () => {
	return faker.lorem.paragraphs(RandomUtils.generateRandomNumberBetween(3, 7));
};

const createProjectGallery = (count: number) => {
	const gallery: ProjectGallery[] = [];
	for (let i = 0; i < count; i++) {
		const images: string[] = [];

		const randomNumber = RandomUtils.generateRandomNumberBetween(4, 9);

		for (let j = 0; j < randomNumber; j++) {
			images.push(getRandomImage());
		}

		gallery.push({
			coverSrc: images[0],
			description: getRandomDescription(),
			imagesSrc: images,
			shortDescription: getRandomShortDescription(),
			title: getRandomTitle()
		});
	}
	return gallery;
};

export const useProjectGallery = (): ProjectGallery[] => {
	const { current } = useRef<ProjectGallery[]>(createProjectGallery(50));

	return current;
};

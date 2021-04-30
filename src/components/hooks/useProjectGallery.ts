import { useRef } from "react";
import * as faker from "faker";
import { RandomUtils } from "../../utils/RandomUtils";

export interface ProjectGallery {
	src: string;
	alt: string;
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

const createProjectGallery = (count: number) => {
	const gallery: ProjectGallery[] = [];
	for (let i = 0; i < count; i++) {
		gallery.push({
			alt: getRandomTitle(),
			src: getRandomImage()
		});
	}
	return gallery;
};

export const useProjectGallery = (): ProjectGallery[] => {
	const { current } = useRef<ProjectGallery[]>(createProjectGallery(50));

	return current;
};

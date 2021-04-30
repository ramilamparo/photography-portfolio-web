import { useRef } from "react";
import * as faker from "faker";
import { RandomUtils } from "../../utils/RandomUtils";

export interface AboutMe {
	avatarUrl: string;
	aboutImage: string;
	description: string;
	fullName: string;
	title: string;
}

const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;

export const useAboutMe = (): AboutMe => {
	const { current } = useRef<AboutMe>({
		avatarUrl: faker.image.avatar(),
		aboutImage: faker.image.people(),
		description: faker.lorem.paragraph(
			RandomUtils.generateRandomNumberBetween(1, 4)
		),
		fullName: fullName,
		title: `Hello! I'm ${fullName}. ${faker.lorem.sentences(
			RandomUtils.generateRandomNumberBetween(1, 2)
		)}`
	});
	return current;
};

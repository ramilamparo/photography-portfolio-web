import { useRef } from "react";
import * as faker from "faker";

export interface AboutMe {
	avatarUrl: string;
}
export const useAboutMe = (): AboutMe => {
	const { current } = useRef<AboutMe>({
		avatarUrl: faker.image.avatar()
	});
	return current;
};

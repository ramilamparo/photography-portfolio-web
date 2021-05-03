import { useRef } from "react";
import { AboutMe } from "../../models/AboutMe";

export const useAboutMe = (): AboutMe => {
	const { current } = useRef<AboutMe>(AboutMe.getRandom());
	return current;
};

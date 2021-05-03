import { useRef } from "react";
import { ProjectItem } from "../../models/ProjectItem";

export const useProjectGallery = (): ProjectItem[] => {
	const { current } = useRef<ProjectItem[]>(ProjectItem.getManyRandom(50));

	return current;
};

import React from "react";
import { useProjectGallery } from "../hooks/useProjectGallery";
import { ProjectList } from "../presentational/ProjectList/ProjectList";

export const ProjectSection = () => {
	const projectItems = useProjectGallery();

	return (
		<ProjectList
			sections={projectItems.map((item) => {
				return {
					coverSrc: item.cover.src,
					title: item.title,
					link: `#${item.title}`,
					shortDescription: item.shortDescription
				};
			})}
		/>
	);
};

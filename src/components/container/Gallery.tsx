import React from "react";
import { useProjectGallery } from "../hooks/useProjectGallery";
import { ProjectGallery } from "../presentational/ProjectGallery/ProjectGallery";

export const Gallery = () => {
	const gallery = useProjectGallery();

	return (
		<ProjectGallery
			items={gallery.map((item) => {
				return {
					coverSrc: item.coverSrc,
					link: `#${item.title}`,
					title: item.title
				};
			})}
		/>
	);
};

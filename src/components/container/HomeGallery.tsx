import React from "react";
import { useProjectGallery } from "../hooks/useProjectGallery";
import { GridGallery } from "../presentational/GridGallery/GridGallery";

export const HomeGallery = () => {
	const galleryItems = useProjectGallery();

	return <GridGallery items={galleryItems} />;
};

import React, { useMemo } from "react";
import {
	ProjectGalleryItem,
	ProjectGalleryItemProps
} from "./ProjectGalleryItem";
import styled from "styled-components";

export interface ProjectGalleryProps {
	items: ProjectGalleryItemProps[];
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 10rem;
	& > * {
		flex-basis: 33%;
	}
`;

export const ProjectGallery = ({ items }: ProjectGalleryProps) => {
	const galleryItemNodes = useMemo(() => {
		return items.map((itemProps) => {
			return <ProjectGalleryItem key={itemProps.link} {...itemProps} />;
		});
	}, [items]);

	return <Container>{galleryItemNodes}</Container>;
};

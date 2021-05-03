import React, { useMemo } from "react";
import {
	ProjectGalleryItem,
	ProjectGalleryItemProps
} from "./ProjectGalleryItem";
import styled from "styled-components";
import { Breakpoint } from "../../../utils/styles/BreakPoint";

export interface ProjectGalleryProps {
	items: ProjectGalleryItemProps[];
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100vh;

	& > * {
		width: 33%;
	}

	@media (${Breakpoint.BIG_DESKTOP_DOWN}) {
		& > * {
			width: 50%;
		}
	}
	@media (${Breakpoint.TABLET_PORTRAIT_DOWN}) {
		& > * {
			width: 100%;
		}
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

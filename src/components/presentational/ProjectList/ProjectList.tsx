import React, { useMemo } from "react";
import styled from "styled-components";
import { ProjectSection } from "./ProjectSection";
import {
	ProjectSectionImage,
	ProjectSectionImageProps
} from "./ProjectSectionImage";
import {
	ProjectSectionDescription,
	ProjectSectionDescriptionProps
} from "./ProjectSectionDescription";

export type SectionItem = ProjectSectionDescriptionProps &
	ProjectSectionImageProps;

export interface ProjectListProps {
	sections: SectionItem[];
}

const Container = styled.div``;

export const ProjectList = ({ sections }: ProjectListProps) => {
	const sectionNodes = useMemo(() => {
		return sections.map((section) => {
			return (
				<ProjectSection>
					<ProjectSectionImage
						title={section.title}
						coverSrc={section.coverSrc}
					/>
					<ProjectSectionDescription
						title={section.title}
						shortDescription={section.shortDescription}
						link={section.link}
					/>
				</ProjectSection>
			);
		});
	}, [sections]);

	return <Container>{sectionNodes}</Container>;
};

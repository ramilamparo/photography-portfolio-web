import React, { Component } from "react";
import styled, { css } from "styled-components";

export type TypographyVariant = "paragraph";

export type TypographyComponentOverride = "span" | "h1" | "p";

export interface TypographyProps {
	variant?: TypographyVariant;
	component: TypographyComponentOverride;
	children?: string;
}

export class Typography extends Component<TypographyProps, {}> {
	constructor({ component, children, variant }: TypographyProps) {
		super({
			component,
			children,
			variant: variant || "paragraph"
		});
	}

	public static baseTypographyStyle = css`
		font-family: "Work Sans";
		font-size: 1.5rem;
		color: black;
	`;

	public static paragraphTypographyStyle = css`
		${Typography.baseTypographyStyle}
	`;

	private static Paragraph = styled.p`
		${Typography.paragraphTypographyStyle}
	`;

	public render = () => {
		const { component, variant, children } = this.props;

		switch (variant) {
			case "paragraph":
				return (
					<Typography.Paragraph as={component}>
						{children}
					</Typography.Paragraph>
				);
			default:
				throw new Error(`Unknown variant ${variant}.`);
		}
	};
}

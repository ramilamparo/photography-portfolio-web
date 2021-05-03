import React, { Component, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Breakpoint } from "../../utils/styles/BreakPoint";
import { mainColor } from "../../utils/styles/theme";

export type TypographyVariant =
	| "paragraph"
	| "title"
	| "title2"
	| "caption"
	| "quote";
export interface TypographyProps {
	variant?: TypographyVariant;
	component?: string;
	children?: ReactNode;
	className?: string;
}

export class Typography extends Component<TypographyProps, {}> {
	public static defaultProps: Partial<TypographyProps> = {
		variant: "paragraph"
	};

	public static baseTypographyStyle = css`
		font-family: "Work Sans";
		font-size: 1.5rem;
		color: white;
	`;

	public static paragraphTypographyStyle = css`
		${Typography.baseTypographyStyle}
	`;

	public static titleTypographyStyle = css`
		${Typography.baseTypographyStyle}
		font-family: "Abril Fatface";
		font-size: 4rem;
		@media (${Breakpoint.DESKTOP_DOWN}) {
			font-size: 3rem;
		}
	`;

	public static title2TypographyStyle = css`
		${Typography.baseTypographyStyle}
		font-size: 3rem;
	`;

	public static captionTypographyStyle = css`
		${Typography.baseTypographyStyle}
	`;

	public static quoteTypographyStyle = css`
		${Typography.baseTypographyStyle}
		color: #888;
		position: relative;
		line-height: 3rem;
		&::before {
			content: "";
			position: absolute;
			left: -1rem;
			top: 0;
			background-color: ${mainColor};
			height: 6rem;
			width: 2px;
		}
	`;

	private static Paragraph = styled.p`
		${Typography.paragraphTypographyStyle}
	`;

	private static Title = styled.p`
		${Typography.titleTypographyStyle}
	`;

	private static Title2 = styled.p`
		${Typography.title2TypographyStyle}
	`;

	private static Quote = styled.p`
		${Typography.quoteTypographyStyle}
	`;

	private static Caption = styled.p`
		${Typography.captionTypographyStyle}
		font-size: 1.3rem;
		opacity: 0.5;
	`;

	public render = () => {
		const { component, variant, children, className } = this.props;

		switch (variant) {
			case "paragraph":
				return (
					<Typography.Paragraph className={className} as={component as any}>
						{children}
					</Typography.Paragraph>
				);
			case "title":
				return (
					<Typography.Title className={className} as={component as any}>
						{children}
					</Typography.Title>
				);
			case "title2":
				return (
					<Typography.Title2 className={className} as={component as any}>
						{children}
					</Typography.Title2>
				);
			case "caption":
				return (
					<Typography.Caption className={className} as={component as any}>
						{children}
					</Typography.Caption>
				);
			case "quote":
				return (
					<Typography.Quote className={className} as={component as any}>
						{children}
					</Typography.Quote>
				);
			default:
				throw new Error(`Unknown variant ${variant}.`);
		}
	};
}

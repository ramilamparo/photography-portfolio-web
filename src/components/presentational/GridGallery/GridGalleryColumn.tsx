import React, { ReactNode } from "react";
import styled from "styled-components";
import { useResizeObserver } from "../../hooks/useResizeObserver";

export interface GridGalleryColumnProps {
	columnCount: number;
	children: ReactNode;
	onResize?: (rect: DOMRectReadOnly) => void;
}

type ColumnProps = Pick<GridGalleryColumnProps, "columnCount">;

const Column = styled.div.attrs<ColumnProps>(({ columnCount }) => ({
	style: {
		width: `${100 / columnCount}%`
	}
}))<ColumnProps>`
	display: span;
`;

export const GridGalleryColumn = ({
	columnCount,
	children,
	onResize
}: GridGalleryColumnProps) => {
	const { ref } = useResizeObserver<HTMLDivElement>(onResize);

	return (
		<Column ref={ref} columnCount={columnCount}>
			{children}
		</Column>
	);
};

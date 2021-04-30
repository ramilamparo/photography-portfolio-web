import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { RandomUtils } from "../../../utils/RandomUtils";
import { GridGalleryImage, GridGalleryImageProps } from "./GridGalleryImage";

type GridGalleryItem = Pick<GridGalleryImageProps, "src" | "alt">;

export interface GridGalleryProps {
	items: GridGalleryItem[];
}

interface GridGalleryItemWithAreaName extends GridGalleryItem {
	areaName: string;
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 1px;
`;

export const GridGallery = ({ items }: GridGalleryProps) => {
	const [gridTemplateAreas, setGridTemplateAreas] = useState("");
	const [gridItems, setGridItems] = useState<GridGalleryItemWithAreaName[]>(
		[]
	);

	const galleryItems = useMemo(() => {
		return gridItems.map(({ areaName, ...itemProps }) => {
			return (
				<GridGalleryImage
					key={itemProps.src + itemProps.alt}
					{...itemProps}
					areaName={areaName}
				/>
			);
		});
	}, [gridItems]);

	useEffect(() => {
		const templates: string[][] = [];
		const COLUMN_COUNT = 4;
		let itemsRemaining = items.length;
		let iterationCount = 0;
		const gridGalleryItems: GridGalleryItemWithAreaName[] = [];

		while (itemsRemaining > 0) {
			const insertedAreaName = insertRandomPossibleGridArea(
				templates,
				iterationCount,
				COLUMN_COUNT
			);
			if (insertedAreaName) {
				const item = items[items.length - itemsRemaining];

				gridGalleryItems.push({
					...item,
					areaName: insertedAreaName
				});

				itemsRemaining--;
			}
			iterationCount++;
		}

		const templateString = templates
			.map((row) => row.join(" "))
			.map((row) => `"${row}"`)
			.join("\n");

		setGridItems(gridGalleryItems);
		setGridTemplateAreas(templateString);
	}, [items]);

	console.log(gridTemplateAreas);

	return (
		<Container
			style={{
				gridTemplateAreas: `
"portraitVertical0 portraitHorizontal1 portraitHorizontal1 squareSmall3"
"portraitVertical0 portraitHorizontal5 portraitHorizontal5 squareSmall7"
"portraitHorizontal8 portraitHorizontal8 squareSmall10 portraitVertical11"
"portraitVertical12 squareBig13 squareBig13 portraitVertical11"
"portraitVertical12 squareBig13 squareBig13 squareSmall19"
"portraitHorizontal20 portraitHorizontal20 squareSmall22 portraitVertical23"
"squareSmall24 squareSmall25 squareSmall26 portraitVertical23"
"portraitVertical28 squareBig29 squareBig29 squareSmall31"
"portraitVertical28 squareBig29 squareBig29 squareSmall35"
"portraitHorizontal36 portraitHorizontal36 squareBig38 squareBig38"
"squareBig40 squareBig40 squareBig38 squareBig38"
"squareBig40 squareBig40 squareSmall46 squareSmall47"
"portraitVertical48 squareSmall49 squareBig50 squareBig50"
"portraitVertical48 portraitVertical53 squareBig50 squareBig50"
"squareSmall56 portraitVertical53 squareSmall58 portraitVertical59"
"squareSmall60 portraitVertical61 squareSmall62 portraitVertical59"
"portraitVertical64 portraitVertical61 squareBig66 squareBig66"
"portraitVertical64 portraitVertical69 squareBig66 squareBig66"
"squareSmall72 portraitVertical69 squareSmall74 portraitVertical75"
"portraitVertical76 portraitVertical77 squareSmall78 portraitVertical75"
"portraitVertical76 portraitVertical77 squareBig82 squareBig82"
"portraitVertical84 portraitVertical85 squareBig82 squareBig82"
"portraitVertical84 portraitVertical85 portraitVertical90 squareSmall91"
"squareSmall10  squareSmall10 portraitVertical90" squareSmall10”
	`
			}}
		>
			{galleryItems}
		</Container>
	);
};

type PossibleGridAreas = {
	portraitHorizontal: boolean;
	portraitVertical: boolean;
	squareBig: boolean;
	squareSmall: boolean;
};

const insertRandomPossibleGridArea = (
	templates: string[][],
	position: number,
	columns: number
): string | null => {
	const possibleGridAreas = getPossibleGridAreas(
		templates,
		position,
		columns
	);

	const gridArea = RandomUtils.getRandomElement(possibleGridAreas);

	switch (gridArea) {
		case "portraitHorizontal": {
			insertPortraitHorizontal(templates, position, columns);
			return "portraitHorizontal" + position;
		}
		case "portraitVertical": {
			insertPortraitVertical(templates, position, columns);
			return "portraitVertical" + position;
		}
		case "squareBig": {
			insertSquareBig(templates, position, columns);
			return "squareBig" + position;
		}
		case "squareSmall": {
			insertSquareSmall(templates, position, columns);
			return "squareSmall" + position;
		}
		default:
			return null;
	}
};

const normalizeTemplateRows = () => {};

const getPossibleGridAreas = (
	templates: string[][],
	position: number,
	columns: number
) => {
	const possibleGridAreas: PossibleGridAreas = {
		portraitHorizontal: false,
		portraitVertical: false,
		squareBig: false,
		squareSmall: false
	};
	if (canInsertSquareSmall(templates, position, columns)) {
		possibleGridAreas.squareSmall = true;
	}
	if (canInsertSquareBig(templates, position, columns)) {
		possibleGridAreas.squareBig = true;
	}
	if (canInsertPortraitVertical(templates, position, columns)) {
		possibleGridAreas.portraitVertical = true;
	}
	if (canInsertPortraitHorizontal(templates, position, columns)) {
		possibleGridAreas.portraitHorizontal = true;
	}

	return Object.entries(possibleGridAreas).reduce<
		Array<keyof PossibleGridAreas>
	>((acc, [key, value]) => {
		if (value) {
			acc.push(key as keyof PossibleGridAreas);
		}
		return acc;
	}, []);
};

const canInsertSquareSmall = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	return isAreaFree([position.x], [position.y], templates, columns);
};

const canInsertSquareBig = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	return isAreaFree(
		[position.x, position.x + 1],
		[position.y, position.y + 1],
		templates,
		columns
	);
};

const canInsertPortraitHorizontal = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	return isAreaFree(
		[position.x, position.x + 1],
		[position.y],
		templates,
		columns
	);
};

const canInsertPortraitVertical = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	return isAreaFree(
		[position.x],
		[position.y, position.y + 1],
		templates,
		columns
	);
};

const insertSquareSmall = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	insertToArea([position.x], [position.y], templates, "squareSmall" + index);
};

const insertSquareBig = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	insertToArea(
		[position.x, position.x + 1],
		[position.y, position.y + 1],
		templates,
		"squareBig" + index
	);
};

const insertPortraitHorizontal = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	insertToArea(
		[position.x, position.x + 1],
		[position.y],
		templates,
		"portraitHorizontal" + index
	);
};

const insertPortraitVertical = (
	templates: string[][],
	index: number,
	columns: number
) => {
	const position = getPosition(index, columns);

	insertToArea(
		[position.x],
		[position.y, position.y + 1],
		templates,
		"portraitVertical" + index
	);
};

const getPosition = (index: number, columns: number) => {
	const x = index % columns;
	const y = Math.floor(index / columns);

	return { x, y };
};

const isAreaFree = (
	x: number[],
	y: number[],
	templates: string[][],
	columns: number
) => {
	return x.every((x) => {
		return y.every((y) => {
			return isPositionFree(x, y, templates, columns);
		});
	});
};

const isPositionFree = (
	x: number,
	y: number,
	templates: string[][],
	columns: number
) => {
	if (x + 1 > columns) {
		return false;
	}
	if (templates[y] === undefined) {
		return true;
	}
	return templates[y][x] === undefined;
};

const insertToArea = (
	x: number[],
	y: number[],
	templates: string[][],
	areaName: string
) => {
	x.forEach((x) => {
		y.forEach((y) => {
			if (templates[y] === undefined) {
				templates[y] = [];
			}
			templates[y][x] = areaName;
		});
	});
};

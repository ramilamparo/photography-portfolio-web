import { keyframes } from "styled-components";

export const slideUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(20%)
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const slideDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%)
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const slideLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(20%)
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const slideRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(-20%)
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

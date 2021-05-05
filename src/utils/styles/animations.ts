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

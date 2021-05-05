import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import debounce from "lodash.debounce";

export type UseOnScrollCallback = () => void;

export const useOnScrollAppear = <T extends HTMLElement>(
	parent: HTMLElement | null,
	callback?: UseOnScrollCallback
) => {
	const ref = useRef<T>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [hasAppeared, setHasAppeared] = useState(false);

	const handleElementInside = useCallback(() => {
		setIsVisible(true);
		setHasAppeared(true);
	}, []);

	const handleElementOutside = useCallback(() => {
		setIsVisible(false);
	}, []);

	const handleOnScroll = useCallback(() => {
		if (window && parent && ref.current) {
			const elRect = ref.current.getBoundingClientRect();
			const elementPos = elRect.top - window.innerHeight;

			if (elementPos <= 0) {
				callback && callback();
				handleElementInside();
			} else {
				handleElementOutside();
			}
		}
	}, [parent, callback, handleElementOutside, handleElementInside]);

	const handleOnScrollDebounced = useMemo(() => {
		return debounce(handleOnScroll, 10);
	}, [handleOnScroll]);

	useEffect(() => {
		if (parent) {
			handleOnScrollDebounced();
			parent.addEventListener("scroll", handleOnScrollDebounced);
		}
		return () => {
			if (parent) {
				parent.removeEventListener("scroll", handleOnScrollDebounced);
			}
		};
	}, [handleOnScrollDebounced, parent]);

	return { ref, isVisible, hasAppeared };
};

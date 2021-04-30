import { useEffect, useRef } from "react";

export type OnResize = (rect: DOMRectReadOnly) => void;

export const useResizeObserver = <T extends Element>(onResize?: OnResize) => {
	const ref = useRef<T>(null);
	const observer = useRef<ResizeObserver>();

	useEffect(() => {
		if (onResize && !observer.current && window && ref.current) {
			const resizeObserver = new window.ResizeObserver((entries) => {
				entries.forEach((entry) => {
					onResize(entry.contentRect);
				});
			});
			resizeObserver.observe((ref.current as unknown) as Element);
			observer.current = resizeObserver;
		}
		const { current: observerRef } = observer;
		return () => {
			if (observerRef) {
				observerRef.disconnect();
			}
		};
	}, [ref, onResize]);

	return { ref };
};

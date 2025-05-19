import { useMemo, useSyncExternalStore } from "react";

type Breakpoints = Record<string, number>;

const defaultBreakPoints: Breakpoints = {};

function useScreenSize(breakpoints: Breakpoints) {
	const sortedBreakpoints = useMemo(() => {
		const entries = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);
		return entries;
	}, [breakpoints]);

	const getCurrentSize = () => {
		const width = window.innerWidth;
		let current = "";
		for (const [key, minWidth] of sortedBreakpoints) {
			if (width >= minWidth) {
				current = key;
			}
		}
		return current;
	};

	const subscribe = (callback: () => void) => {
		window.addEventListener("resize", callback);
		return () => window.removeEventListener("resize", callback);
	};

	return useSyncExternalStore(subscribe, getCurrentSize);
}

export { defaultBreakPoints, useScreenSize, type Breakpoints };

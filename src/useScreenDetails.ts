import { useDevicePixelRatio } from "./useDevicePixelRatio";
import { useOrientation } from "./useOrientation";
import { type Breakpoints, useScreenSize } from "./useScreenSize";

function useScreenDetails(breakpoints: Breakpoints) {
	const ratio = useDevicePixelRatio();
	const orientation = useOrientation();
	const size = useScreenSize(breakpoints);

	return {
		ratio,
		orientation,
		size,
	};
}

export { useScreenDetails };

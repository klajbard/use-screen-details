import { useCallback, useEffect, useState } from "react";

type Orientation = {
	type: string;
	angle: number;
};

function useOrientation(): Orientation {
	const getOrientation = useCallback((): Orientation => {
		const { orientation } = window.screen;
		return {
			type: orientation?.type || "unknown",
			angle: orientation?.angle || 0,
		};
	}, []);

	const [orientation, setOrientation] = useState<Orientation>(() =>
		typeof window !== "undefined"
			? getOrientation()
			: { type: "unknown", angle: 0 },
	);

	useEffect(() => {
		if (typeof window === "undefined" || !window.screen?.orientation) return;

		const handleChange = () => {
			setOrientation(getOrientation());
		};

		window.screen.orientation.addEventListener("change", handleChange);

		return () => {
			window.screen.orientation.removeEventListener("change", handleChange);
		};
	}, [getOrientation]);

	return orientation;
}

export { useOrientation, type Orientation };

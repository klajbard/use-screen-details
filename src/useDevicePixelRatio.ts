import { useEffect, useState } from "react";

function useDevicePixelRatio(): number {
	const [dpr, setDpr] = useState(() =>
		typeof window !== "undefined" ? window.devicePixelRatio : 1,
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const update = () => setDpr(window.devicePixelRatio);

		const mediaQuery = window.matchMedia(
			`(resolution: ${window.devicePixelRatio}dppx)`,
		);

		mediaQuery.addEventListener("change", update);

		return () => {
			mediaQuery.removeEventListener("change", update);
		};
	}, []);

	return dpr;
}

export { useDevicePixelRatio };

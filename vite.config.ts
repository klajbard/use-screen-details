import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        useScreenSize: path.resolve(__dirname, "src/useScreenSize.ts"),
        useOrientation: path.resolve(__dirname, "src/useOrientation.ts"),
        useDevicePixelRatio: path.resolve(
          __dirname,
          "src/useDevicePixelRatio.ts"
        ),
        useScreenDetails: path.resolve(__dirname, "src/useScreenDetails.ts"),
      },
      formats: ["es"],
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        entryFileNames: "[name].js",
        format: "es",
      },
    },
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.app.json" })],
});

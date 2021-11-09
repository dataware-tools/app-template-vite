/**
 * @type {import('vite').UserConfig}
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import packageInfo from "./package.json";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    tsconfigPaths(),
  ],
  define: {
    "process.env": {},
  },
  base: packageInfo.basePath,
  cacheDir: "./.vite",
  assetsInclude: ["robots.txt"],
});

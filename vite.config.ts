import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

export default defineConfig({
	assetsInclude: /\.(png|jpe?g|JPE?G|webp|avif)$/i,
	plugins: [
		sveltekit(),
		imagetools({
			include: /^[^?]+\.(heif|avif|jpe?g|JPE?G|png|tiff|webp|gif)(\?.*)?$/,
		}),
	],
	server: {
		fs: {
			allow: ["posts"],
		},
	},
});

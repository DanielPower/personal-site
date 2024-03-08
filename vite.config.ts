import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: (id) => {
				if (id.searchParams.has("thumbnail")) {
					return new URLSearchParams("w=300&format=webp");
				}
				if (id.searchParams.has("full")) {
					return new URLSearchParams("w=960&format=webp");
				}
				return new URLSearchParams();
			},
		}),
	],
	server: {
		fs: {
			allow: ["posts"],
		},
	},
});

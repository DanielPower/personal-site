import fs from "fs";
import path from "path";

export const load = async () => {
	try {
		const photoDir = path.resolve("./static/galleryassets");
		const files = fs.readdirSync(photoDir);
		const photos = files
			.filter((file) => /\.(JPG)$/.test(file))
			.map((file) => `/galleryassets/${file}`); // Map to image URLs

		return {
			photos,
		};
	} catch (error) {
		console.error("Error loading photos:", error);
		return {
			photos: [],
		};
	}
};

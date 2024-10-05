import type { PageServerLoad } from "./$types";
import exif from "jpeg-exif";

export const load: PageServerLoad = async ({ url }) => {
	const photoName = url.href.split("/").at(-1);
	try {
		const photo = `./static/galleryassets/${photoName}`;
		const exifData = exif.parseSync(photo);
		return {
			exif: exifData,
			photo: `/galleryassets/${photoName}`,
		};
	} catch (error) {
		console.error("Error loading photos:", error);
		return {
			photo: null,
			exif: null,
		};
	}
};

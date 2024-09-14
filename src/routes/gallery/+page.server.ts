import { error, type Load } from "@sveltejs/kit";
import exif from "jpeg-exif";

export const load: Load = async ({ url }) => {
	const photo = url.searchParams.get("photo");
	if (photo) {
		try {
			return {
				exif: exif.parseSync(`./src/lib/photos/${photo}`),
				photo,
			};
		} catch (e) {
			return error(404, "Photo not found");
		}
	}
	return {};
};

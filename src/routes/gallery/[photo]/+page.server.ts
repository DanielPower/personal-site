import { error, type Load } from "@sveltejs/kit";
import exif from "jpeg-exif";

export const load: Load = async ({ params }) => {
	try {
		return {
			exif: exif.parseSync(`./src/lib/photos/${params.photo}`),
			photo: params.photo,
		};
	} catch (e) {
		return error(404, "Photo not found");
	}
};

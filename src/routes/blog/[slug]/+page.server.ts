import { getPost } from "$lib/server/posts";
import { error, type Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
	if (!params.slug) {
		throw error(404);
	}
	const post = getPost(params.slug);
	if (!post) {
		throw error(404);
	}
	const { title, date } = post.meta;
	const content = post.content;
	return {
		title,
		date,
		content,
	};
};

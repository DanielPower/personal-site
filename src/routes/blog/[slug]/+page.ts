import { error, type Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
	if (!params.slug) {
		throw error(404);
	}
	const post = await import(`../../../../posts/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;
	return {
		title,
		date,
		content,
	};
};

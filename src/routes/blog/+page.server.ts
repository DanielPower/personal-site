import { getPosts, tags } from "$lib/server/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const tagQuery = url.searchParams.get("tags");
	let posts = getPosts();
	if (tagQuery) {
		const tagSet = new Set(tagQuery.split(","));
		posts = posts.filter((post) =>
			post.tags.some((tag) => tagSet.has(tag.label)),
		);
	}
	return { posts, tags: [...tags.values()] };
};

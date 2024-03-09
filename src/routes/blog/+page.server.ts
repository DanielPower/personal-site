import { getPosts, tags } from "$lib/server/posts";

export const load = async () => {
	const posts = getPosts();
	return { posts, tags: [...tags.values()] };
};

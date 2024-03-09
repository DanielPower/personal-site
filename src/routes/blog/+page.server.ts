import { getPosts } from "$lib/server/posts";

export const load = async () => {
	const posts = getPosts();
	return { posts };
};

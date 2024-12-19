import { getPosts } from "$lib/server/posts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const posts = getPosts();
	return { posts };
};

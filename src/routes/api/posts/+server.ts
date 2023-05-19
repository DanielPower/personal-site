import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '../../../util/posts';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return json(sortedPosts);
};

import { json } from '@sveltejs/kit';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob(`/posts/*.md`);
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			return {
				meta: metadata,
				path: `/blog/${path.slice(7, -3)}`
			};
		})
	);

	return allPosts;
};

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};

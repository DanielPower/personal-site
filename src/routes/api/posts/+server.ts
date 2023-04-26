import { json } from '@sveltejs/kit';
import type { Post } from '../../../../types';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob<Post>(`/posts/*.md`);
	const iterablePostFiles = Object.entries(allPostFiles);

	return Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const filename = path.split('/').at(-1)?.split('.').at(0);
			const { metadata } = await resolver();
			return {
				metadata,
				path: `/blog/${filename}`
			};
		})
	);
};

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return json(sortedPosts);
};

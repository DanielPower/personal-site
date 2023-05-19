import type { Post } from '../../types';

export const fetchMarkdownPosts = async () => {
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

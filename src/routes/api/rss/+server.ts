import type { Post } from '../../../../types';
import { fetchMarkdownPosts } from '../../../util/posts';
import { js2xml } from 'xml-js';
import type { RequestHandler } from './$types';

const renderRss = (posts: Post[], origin: string) =>
	js2xml(
		{
			_declaration: {
				_attributes: {
					version: '1.0',
					encoding: 'utf-8'
				}
			},
			rss: {
				channel: {
					title: 'Daniel Power',
					link: origin,
					item: posts.map((post) => ({
						title: post.metadata.title,
						link: `${origin}${post.path}`
					}))
				}
			}
		},
		{ compact: true }
	);

export const GET: RequestHandler = async ({ url }) => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort(
		(a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date)
	);

	return new Response(renderRss(sortedPosts, url.origin), {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	});
};

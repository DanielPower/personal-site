import type { Post } from "../../../types";
import { getPosts } from "$lib/server/posts";
import { js2xml } from "xml-js";
import type { RequestHandler } from "./$types";

const renderRss = (posts: (Post & { html: string })[], origin: string) =>
	js2xml(
		{
			_declaration: {
				_attributes: {
					version: "1.0",
					encoding: "utf-8",
				},
			},
			rss: {
				_attributes: {
					version: "2.0",
					"xmlns:atom": "http://www.w3.org/2005/Atom",
				},
				channel: {
					title: "Daniel Power",
					description: "Daniel Power's ramblings",
					link: origin,
					"atom:link": {
						_attributes: {
							href: `${origin}rss`,
							rel: "self",
							type: "application/rss+xml",
						},
					},
					item: posts.map((post) => ({
						title: post.title,
						guid: post.slug,
						link: `${origin}/blog/${post.slug}`,
						pubDate: new Date(post.date).toUTCString(),
						description: post.html,
					})),
				},
			},
		},
		{ compact: true },
	);

export const GET: RequestHandler = async ({ url }) => {
	const posts = await Promise.all(
		getPosts().map(async (post) => ({
			...post,
			html: (await import(`$lib/posts/${post.slug}.md`)).default.render().html,
		})),
	);

	return new Response(renderRss(posts, url.origin), {
		headers: {
			"Cache-Control": `max-age=0, s-max-age=${600}`,
			"Content-Type": "application/xml",
		},
	});
};

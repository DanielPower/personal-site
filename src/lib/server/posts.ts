import { parseMarkdown } from "./markdown";

const postFiles = import.meta.glob<string>(`/posts/*.md`, {
	query: "?raw",
	import: "default",
});
const slugs = Object.keys(postFiles).map(
	(path) => path.split("/").at(-1)!.split(".").at(0)!,
);
const raw = await Promise.all(
	Object.values(postFiles).map((resolver) => resolver()),
);
const markdown = await Promise.all(raw.map(parseMarkdown));
const posts = slugs
	.map((slug, index) => ({
		slug,
		meta: markdown[index].meta,
		content: markdown[index].content,
	}))
	.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));

const postsMap = new Map(posts.map((post) => [post.slug, post]));

export const getPosts = () => {
	return posts;
};

export const getPost = (slug: string) => postsMap.get(slug);

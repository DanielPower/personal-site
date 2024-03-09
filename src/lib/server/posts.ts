import type { Post } from "../../../types";
import { assignToBucket } from "./bucket";
import { parseMarkdown } from "./markdown";

const tagColors = [
	"#faedcb",
	"#c9e4de",
	"#dbcdf0",
	"#f2c6de",
	"#ffadad",
	"#ffd6a5",
	"#fdffb6",
];

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
const posts: Post[] = slugs
	.map((slug, index) => ({
		title: markdown[index].meta.title,
		date: markdown[index].meta.date,
		tags:
			markdown[index].meta.tags?.map((tag) => ({
				label: tag,
				color: tagColors[assignToBucket(tag, tagColors.length)],
			})) ?? [],
		slug,
		content: markdown[index].content,
	}))
	.sort((a, b) => +new Date(b.date) - +new Date(a.date));

const postsMap = new Map(posts.map((post) => [post.slug, post]));

export const getPosts = () => {
	return posts;
};

export const getPost = (slug: string) => postsMap.get(slug);

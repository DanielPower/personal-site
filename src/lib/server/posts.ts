import type { SvelteComponent } from "svelte";
import type { PostFrontmatter } from "../../../types";
import { assignToBucket } from "./bucket";
import { dev } from "$app/environment";

const tagColors = [
	"#faedcb",
	"#c9e4de",
	"#dbcdf0",
	"#f2c6de",
	"#ffadad",
	"#ffd6a5",
	"#fdffb6",
];

const postFiles = import.meta.glob<{
	default: SvelteComponent;
	metadata: PostFrontmatter;
}>(`$lib/posts/*.md`);
const slugs = Object.keys(postFiles).map(
	(path) => path.split("/").at(-1)!.split(".").at(0)!,
);
const data = await Promise.all(
	Object.values(postFiles).map((resolver) => resolver()),
);

export const tags = new Map(
	data
		.map(({ metadata }) => metadata.tags)
		.flat()
		.filter(Boolean)
		.map((tag) => [
			tag,
			{
				label: tag,
				color: tagColors[assignToBucket(tag, tagColors.length)],
			},
		]),
);

const posts = data
	.map(({ default: component, metadata }, index) => {
		const { html, css } = component.render();
		return {
			title: metadata.title,
			draft: !metadata.date,
			date: metadata.date || new Date().toISOString().slice(0, 10),
			tags: metadata.tags?.map((tag) => tags.get(tag)!) ?? [],
			slug: slugs[index],
			content: `<style>${css.code}</style>${html}`,
		};
	})
	.sort((a, b) => +new Date(b.date) - +new Date(a.date))
	.filter((post) => dev || !post.draft);
const postsMap = new Map(posts.map((post) => [post.slug, post]));

export const getPosts = () => {
	return posts;
};

export const getPost = (slug: string) => postsMap.get(slug);

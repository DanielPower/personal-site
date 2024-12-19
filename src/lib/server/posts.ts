import type { SvelteComponent } from "svelte";
import type { PostFrontmatter } from "../../../types";
import { dev } from "$app/environment";
import { render } from "svelte/server";

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

const posts = data
  .map(({ default: component, metadata }, index) => {
    const { body } = render(component);
    return {
      title: metadata.title,
      draft: !metadata.date,
      date: metadata.date || new Date().toISOString().slice(0, 10),
      slug: slugs[index],
      body,
    };
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .filter((post) => dev || !post.draft);
const postsMap = new Map(posts.map((post) => [post.slug, post]));

export const getPosts = () => {
  return posts;
};

export const getPost = (slug: string) => postsMap.get(slug);

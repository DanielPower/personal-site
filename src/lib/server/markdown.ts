import rehypePrismAll from "rehype-prism-plus/all";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatterPlugin from "remark-extract-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import yaml from "yaml";
import type { PostFrontmatter } from "../../../types";

const processor = unified()
	.use(remarkParse)
	.use(remarkFrontmatter, ["yaml"])
	.use(remarkFrontmatterPlugin, { yaml: yaml.parse })
	.use(remarkGfm)
	.use(remarkRehype)
	.use(rehypePrismAll)
	.use(rehypeStringify);

export const parseMarkdown = async (markdown: string) => {
	const rendered = await processor.process(markdown);
	const meta = rendered.data as PostFrontmatter;
	return { content: rendered.toString(), meta };
};

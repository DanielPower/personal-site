import rss from "@astrojs/rss";
import mdxRenderer from "@astrojs/mdx/server.js";
import { getCollection, render } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

export async function GET(context) {
  const container = await AstroContainer.create();
  container.addServerRenderer({ renderer: mdxRenderer });
  const posts = (await getCollection("blog")).filter(
    (post) => !!post.data.date,
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await Promise.all(
      posts.map(async (post) => {
        const { Content } = await render(post);
        const content = await container.renderToString(Content);
        return {
          title: post.data.title,
          pubDate: post.data.date.toISOString(),
          link: `/blog/${post.id}/`,
          content,
        };
      }),
    ),
  });
}

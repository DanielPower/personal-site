import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = (await getCollection("blog")).filter(
    (post) => !!post.data.date,
  );
  console.log(posts);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      guid: post.id,
      pubDate: post.data.date.toISOString(),
      description: post.body,
      link: `/blog/${post.id}/`,
    })),
  });
}

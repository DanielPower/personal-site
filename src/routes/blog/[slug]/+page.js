export async function load({ params }) {
  const filename = params.slug.endsWith(".html")
    ? params.slug.slice(0, -5)
    : params.slug;
  const post = await import(`../../../../posts/${filename}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    title,
    date,
    content,
  };
}

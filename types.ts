export type PostFrontmatter = {
  title: string;
  date?: string;
};

export type Post = {
  title: string;
  date: string;
  draft: boolean;
  slug: string;
  body: string;
};

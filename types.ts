export type PostFrontmatter = {
	title: string;
	date: string;
	tags: string[];
};

export type Post = {
	title: string;
	date: string;
	tags: {
		label: string;
		color: string;
	}[];
	slug: string;
	content: string;
};

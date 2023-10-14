// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	declare module '*.png?thumbnail' {
		const image: string;
		export default image;
	}
	declare module '*.jpg?thumbnail' {
		const image: string;
		export default image;
	}
}

export {};

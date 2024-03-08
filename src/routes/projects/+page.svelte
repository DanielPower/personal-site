<script>
	import Fa from "svelte-fa";
	import keebProOrig from "$lib/assets/keeb-pro.png";
	import keebProThumb from "$lib/assets/keeb-pro.png?thumbnail";
	import eclipseOrig from "$lib/assets/eclipse.png";
	import eclipseThumb from "$lib/assets/eclipse.png?thumbnail";
	import orbsOrig from "$lib/assets/orbs.png";
	import orbsThumb from "$lib/assets/orbs.png?thumbnail";
	import motionOrig from "$lib/assets/motion.jpg";
	import motionThumb from "$lib/assets/motion.jpg?thumbnail";
	import {
		faDiscord,
		faGithub,
		faGitlab,
		faItchIo,
	} from "@fortawesome/free-brands-svg-icons";
	import { faGamepad, faGlobe } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="project">
	<h1>TwatBot (2023)</h1>
	<p>
		A Discord bot that listens for Twitter/X links and replies with a Nitter
		link. Nitter is an alternative frontend for Twitter which does not require a
		Twitter account to view.
	</p>
	<p>
		It is written in Rust using <a
			href="https://github.com/serenity-rs/serenity">Serenity</a
		> to interact with Discord.
	</p>
	<div class="links">
		<a href="https://github.com/danielpower/twatbot"
			><Fa fw icon={faGithub} /> Repository</a
		>
		<a
			href="https://discord.com/api/oauth2/authorize?client_id=1154539158564515890&permissions=67584&scope=bot"
		>
			<Fa fw icon={faDiscord} /> Invite to your server
		</a>
	</div>
</div>

<div class="project">
	<h1>Eclipse (2023)</h1>
	<a href={eclipseOrig}
		><img class="thumb" src={eclipseThumb} alt="Screenshot of Eclipse" /></a
	>
	<p>
		A tool for visualizing GLSL shaders. It is written in Lua using the Love2D
		framework. It is designed to be compatible with shaders from <a
			href="https://www.shadertoy.com">ShaderToy</a
		>
	</p>
	<div class="links">
		<a href="https://github.com/DanielPower/react-state-talk">
			<Fa fw icon={faGithub} /> Repository
		</a>
	</div>
</div>

<div class="project">
	<h1>Orbs in Space - Love2D Game Jam entry (2023)</h1>
	<a href={orbsOrig}
		><img class="thumb" src={orbsThumb} alt="Screenshot of Orbs in Space" /></a
	>
	<p>
		A game made for the <a href="https://itch.io/jam/love2d-jam-2023"
			>Love2D Jam 2023.</a
		>
		The theme is "Connection".
	</p>
	<p>
		You are an orb whose only method of movement is to emit mass in the opposite
		direction. In order to recover mass you must absorb smaller orbs. The goal
		is to absorb enough mass to become the largest orb in the level.
	</p>
	<p>
		Orbs in Space is written in Lua using the Love2D framework. It uses an ECS
		architecture.
	</p>
	<div class="links">
		<a href="https://github.com/DanielPower/Love2DJam2023"
			><Fa fw icon={faGithub} /> Repository</a
		>
		<a href="https://itch.io/jam/love2d-jam-2023/rate/1946249"
			><Fa fw icon={faItchIo} /> Game Jam Entry</a
		>
		<span><Fa fw icon={faGamepad} /> Play Online: <i>Coming soon</i></span>
	</div>
</div>

<div class="project">
	<h1>Advent of Code Solutions (2019-2023)</h1>
	<p>
		Advent of Code is a yearly programming challenge. Each day in December, a
		new Christmas themed puzzle is released. I've been participating since 2020.
	</p>
	<p>
		I like to use Advent of Code as an opportunity to practice a new language or
		programming paradigm. In 2019 I wrote my solutions in Rust. In 2021 and 2022
		I used it as an opportunity to learn pure functional programming in Haskell.
	</p>
	<div class="links">
		<a href="https://github.com/DanielPower/AdventOfCode"
			><Fa fw icon={faGithub} /> Repository</a
		>
	</div>
</div>

<div class="project">
	<h1>osu! Rapid Host (2022)</h1>
	<p>
		A bot that manages osu! multiplayer lobbies. It automatically chooses maps
		based on the provided filters, and starts the game when all players are
		ready.
	</p>
	<p>
		It includes a tool to scrape data for all ranked maps from the osu! API and
		store it in a sqlite database. This allows the bot to quickly find maps that
		match the provided filters.
	</p>
	<p>
		The bot is written in Typescript, and uses bancho.js to communicate with the
		osu! API.
	</p>
	<div class="links">
		<a
			href="https://github.com/DanielPower/osu-rapid-host/blob/master/package.json"
			><Fa fw icon={faGithub} /> Repository</a
		>
	</div>
</div>

<div class="project">
	<h1>Opine (2022)</h1>
	<p>
		A global state management library for React. It is inspired by <a
			href="https://github.com/pmndrs/zustand">zustand</a
		>, but with the goal of providing an intuitive API around a strictly sliced
		store structure which is more suitable to large projects.
	</p>
	<p>
		Zustand allows for a sliced store structure, but it does not prevent actions
		from modifying state outside of their slice. Opine enforces a strict
		structure where each slice contains mutations that can only affect that
		slice. Actions that should affect multiple slices are performed using
		composition. This makes it easier to reason about the flow of data through
		the store.
	</p>
	<p>
		Opine is written in Typescript. It uses the modern useExternalSyncStore hook
		to inform React of state changes. It has built-in support for Redux's dev
		tools.
	</p>
	<p>Opine is currently a work in progress, and is not yet ready for use.</p>
	<div class="links">
		<a href="https://github.com/DanielPower/opine"
			><Fa fw icon={faGithub} /> Repository</a
		>
	</div>
</div>

<div class="project">
	<h1>Keeb Pro (2020)</h1>
	<a href={keebProOrig}
		><img class="thumb" src={keebProThumb} alt="Screenshot of Keeb Pro" /></a
	>
	<p>
		A typing test built with svelte. It prompts the user to type a random
		selection of common English words, and displays the user's typing speed in
		words per minute.
	</p>
	<div class="links">
		<a href="https://github.com/danielpower/keeb-pro"
			><Fa fw icon={faGithub} /> Repository</a
		>
		<a href="https://keeb.danielpower.ca"><Fa fw icon={faGlobe} /> App</a>
	</div>
</div>

<div class="project">
	<h1>Xorg Autopulse (2018)</h1>
	<p>
		A linux utility which automatically changes the audio output device for a
		given application based on which display its window is on. This is useful if
		you have a TV connected to your computer, and want to automatically switch
		the audio output to the TV when you drag a video player to it.
	</p>
	<p>
		Since most Linux distributions now ship Wayland instead of Xorg, and
		Pipewire instead of Pulseaudio, this tool will no longer work on modern
		systems.
	</p>
	<div class="links">
		<a href="https://gitlab.com/DanielPower/autopulse"
			><Fa fw icon={faGitlab} /> Repository</a
		>
	</div>
</div>

<div class="project">
	<h1>Motion (2017)</h1>
	<a href={motionOrig}
		><img class="thumb" src={motionThumb} alt="Screenshot of Motion" /></a
	>
	<p>
		Motion is an animation library for the Love2D game framework. It includes a
		companion GUI tool for composing animations from spritesheets. Motion allows
		callbacks to be registered for animation events, such as the end of a loop.
	</p>
	<div class="links">
		<a href="https://gitlab.com/DanielPower/motion"
			><Fa fw icon={faGitlab} /> Repository</a
		>
	</div>
</div>

<style>
	.project h1,
	p {
		margin-bottom: 1rem;
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	.thumb {
		float: right;
		width: 300px;
		padding-left: 1rem;
	}

	@media (max-width: 600px) {
		.thumb {
			float: none;
			width: auto;
			padding-left: 0;
		}
	}
</style>

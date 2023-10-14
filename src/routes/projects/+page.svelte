<script>
	import Fa from 'svelte-fa';
	import { faDiscord, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
	import { faGamepad, faGlobe } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="project">
	<h1>TwatBot (2023)</h1>
	<p>
		A Discord bot that listens for Twitter/X links and replies with a Nitter link. Nitter is an
		alternative frontend for Twitter which does not require a Twitter account to view.
	</p>
	<p>
		It is written in Rust using <a href="https://github.com/serenity-rs/serenity">Serenity</a> to interact
		with Discord.
	</p>
	<div class="links">
		<a href="https://github.com/danielpower/twatbot"><Fa fw icon={faGithub} /> Repository</a>
		<a
			href="https://discord.com/api/oauth2/authorize?client_id=1154539158564515890&permissions=67584&scope=bot"
		>
			<Fa fw icon={faDiscord} /> Invite to your server
		</a>
	</div>
</div>

<div class="project">
	<h1>Eclipse (2023)</h1>
	<img class="thumb" src="/eclipse.png" alt="Screenshot of Eclipse" />
	<p>
		A tool for visualizing GLSL shaders. It is written in Lua using the Love2D framework. It is
		designed to be compatible with shaders from <a href="https://www.shadertoy.com">ShaderToy</a>
	</p>
	<div class="links">
		<a href="https://github.com/DanielPower/react-state-talk">
			<Fa fw icon={faGithub} /> Repository
		</a>
	</div>
</div>

<div class="project">
	<h1>Orbs in Space - Love2D Game Jam entry (2023)</h1>
	<img class="thumb" src="/orbs.png" alt="Screenshot of Orbs in Space" />
	<p>
		A game made for the <a href="https://itch.io/jam/love2d-jam-2023">Love2D Jam 2023.</a>
		The theme is "Connection".
	</p>
	<p>
		You are an orb whose only method of movement is to emit mass in the opposite direction. In order
		to recover mass you must absorb smaller orbs. The goal is to absorb enough mass to become the
		largest orb in the level.
	</p>
	<p>Orbs in Space is written in Lua using the Love2D framework. It uses an ECS architecture.</p>
	<div class="links">
		<a href="https://github.com/DanielPower/Love2DJam2023"><Fa fw icon={faGithub} /> Repository</a>
		<a href="https://itch.io/jam/love2d-jam-2023/rate/1946249"
			><Fa fw icon={faItchIo} /> Game Jam Entry</a
		>
		<span><Fa fw icon={faGamepad} /> Play Online: <i>Coming soon</i></span>
	</div>
</div>

<div class="project">
	<h1>Advent of Code Solutions (2020-2022)</h1>
	<p>
		Advent of Code is a yearly programming challenge. Each day in December, a new Christmas themed
		puzzle is released. I've been participating since 2020.
	</p>
	<p>
		In 2021 and 2022 I used it as an opportunity to learn pure functional programming in Haskell.
	</p>
	<div class="links">
		<a href="https://github.com/DanielPower/AdventOfCode2022"
			><Fa fw icon={faGithub} /> 2022 solutions in Haskell</a
		>
		<a href="https://github.com/DanielPower/AdventOfCode2021"
			><Fa fw icon={faGithub} /> 2021 solutions in Haskell</a
		>
		<a href="https://github.com/DanielPower/AdventOfCode2020"
			><Fa fw icon={faGithub} /> 2020 solutions in Typescript</a
		>
	</div>
</div>

<div class="project">
	<h1>osu! Rapid Host (2022)</h1>
	<p>
		A bot that manages osu! multiplayer lobbies. It automatically chooses maps based on the provided
		filters, and starts the game when all players are ready.
	</p>
	<p>
		It includes a tool to scrape data for all ranked maps from the osu! API and store it in a sqlite
		database. This allows the bot to quickly find maps that match the provided filters.
	</p>
	<p>The bot is written in Typescript, and uses bancho.js to communicate with the osu! API.</p>
	<div class="links">
		<a href="https://github.com/DanielPower/osu-rapid-host/blob/master/package.json"
			><Fa fw icon={faGithub} /> Repository</a
		>
	</div>
</div>

<div class="project">
	<h1>Keeb Pro (2022)</h1>
	<img class="thumb" src="/keeb-pro.png" alt="Screenshot of Keeb Pro" />
	<p>
		A typing test built with svelte. It prompts the user to type a random selection of common
		English words, and displays the user's typing speed in words per minute.
	</p>
	<div class="links">
		<a href="https://github.com/danielpower/keeb-pro"><Fa fw icon={faGithub} /> Repository</a>
		<a href="https://keeb.danielpower.ca"><Fa fw icon={faGlobe} /> App</a>
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

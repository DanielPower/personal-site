<script>
	import Fa from "svelte-fa";
	import {
		faGithub,
		faInstagram,
		faMastodon,
		faSteam,
	} from "@fortawesome/free-brands-svg-icons";
	import {
		faCircle,
		faEnvelope,
		faPaw,
	} from "@fortawesome/free-solid-svg-icons";
</script>

<div class="container">
	<div class="sidebar">
		<div class="group">
			Social
			<a href="mailto:me+homepage@danielpower.ca"
				>Email <Fa fw icon={faEnvelope} /></a
			>
			<a href="https://www.instagram.com/ifcoffeethendan/"
				>Instagram <Fa fw icon={faInstagram} /></a
			>
			<a href="https://www.mastodon.online/@CrispyUmbrella"
				>Mastodon <Fa fw icon={faMastodon} /></a
			>
		</div>

		<div class="group">
			Coding
			<a href="https://www.github.com/danielpower"
				>GitHub <Fa fw icon={faGithub} /></a
			>
			<a href="https://open.kattis.com/users/crispyumbrella"
				>Kattis <Fa fw icon={faPaw} /></a
			>
		</div>

		<div class="group">
			Gaming
			<a href="https://www.steamcommunity.com/id/DanielPower/"
				>Steam <Fa fw icon={faSteam} /></a
			>
			<a href="https://osu.ppy.sh/users/10624401"
				>osu! <Fa fw icon={faCircle} class="fa-light" /></a
			>
		</div>
	</div>

	<div class="content">
		<p>
			Senior Software Developer @ <a href="https://www.colabsoftware.com"
				>CoLab Software</a
			><br />
			Located in St. John's, Newfoundland, Canada 🇨🇦
		</p>

		<p>
			It's December, so I'm working on Advent of Code 2024 and catching up on my
			game backlog. Enjoy the snowy vibes! 🎄
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	.sidebar {
		background-color: var(--color-dark);
		height: fit-content;
		padding: 0.5rem;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.group {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 650px) {
		.container {
			flex-direction: row;
		}

		.group {
			align-items: flex-end;
		}

		.content {
			flex: 1;
		}
	}
</style>

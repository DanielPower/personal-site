<script>
	import Fa from 'svelte-fa';
	import { faGithub, faInstagram, faMastodon, faSteam } from '@fortawesome/free-brands-svg-icons';
	import { faCircle, faEnvelope, faPaw } from '@fortawesome/free-solid-svg-icons';
</script>

<p>Senior Software Developer @ <a href="https://www.colabsoftware.com">CoLab Software</a></p>

<p>Located in St. John's, Newfoundland</p>

<div class="group">
	Social
	<a href="mailto://me+homepage@danielpower.ca"><Fa fw icon={faEnvelope} /> Email</a>
	<a href="https://www.instagram.com/ifcoffeethendan/"><Fa fw icon={faInstagram} /> Instagram</a>
	<a href="https://www.mastodon.online/@CrispyUmbrella"><Fa fw icon={faMastodon} /> Mastodon</a>
</div>

<div class="group">
	Coding
	<a href="https://www.github.com/danielpower"><Fa fw icon={faGithub} /> GitHub</a>
	<a href="https://open.kattis.com/users/crispyumbrella"><Fa fw icon={faPaw} /> Kattis</a>
</div>

<div class="group">
	Gaming
	<a href="https://www.steamcommunity.com/id/DanielPower/"><Fa fw icon={faSteam} /> Steam</a>
	<a href="https://osu.ppy.sh/users/10624401"><Fa fw icon={faCircle} class="fa-light" /> osu!</a>
</div>

<style>
	.group {
		display: flex;
		flex-direction: column;
	}
</style>

<script>
	import Fa from "svelte-fa";
	import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
	import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

	const badges = [
		{
			icon: faEnvelope,
			href: "mailto:me+resume@danielpower.ca",
			text: "me@danielpower.ca",
		},
		{ icon: faGlobe, href: "https://danielpower.ca", text: "danielpower.ca" },
		{
			icon: faGithub,
			href: "https://github.com/danielpower",
			text: "danielpower",
		},
		{
			icon: faLinkedin,
			href: "https://www.linkedin.com/in/danielpowernl",
			text: "danielpowernl",
		},
	];
</script>

<div class="badges">
	{#each badges as { icon, href, text }}
		<a class="badge" {href}><Fa {icon} scale={1.1} /> {text}</a>
	{/each}
</div>
<h2>Experience</h2>
<h3>CoLab Software</h3>
<div class="job">
	<span>Senior Software Developer</span>
	<span>December 2022 - Present</span>
</div>
<p>
	Focused on developer experience and improving productivity and quality across
	the team.
</p>
<div class="job">
	<span>Intermediate Software Developer</span>
	<span>August 2022 - December 2022</span>
</div>
<p>
	Created an in-house global state management system for React, with
	inspirations from Redux and Zustant, but with a simpler API to ease adoption
	and education to the team.
</p>
<div class="job">
	<span>Junior Full Stack Developer</span>
	<span>September 2019 - August 2022</span>
</div>
<p>
	Created a library for rendering and manipulating property-based markup over
	arbitrary document and model viewing technologies.
</p>
<div class="job">
	<span>Full Stack Developer Intern</span>
	<span>June 2019 - September 2019</span>
</div>
<h3>Memorial University of Newfoundland</h3>
<div class="job">
	<span>Teaching Assistant</span>
	<span>September 2021 - December 2021</span>
</div>
<p>
	Debugged and graded student assignemnts for 3rd year course on heuristic
	search based artificial intelligence.
</p>
<div class="job">
	<span>Research Assistant</span>
	<span>June 2019 - September 2019</span>
</div>
<p>
	Used predictive nueral networks as a model of the human visual system for the
	purpose of studying the brains of people with schizophrenia.
</p>

<style>
	p {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.badges {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 0.5rem;
	}

	.job {
		display: flex;
		justify-content: space-between;
		transition: ease all 0.25s;
	}

	@media screen and (max-width: 740px) {
		.badge {
			width: 210px;
		}
		.badges {
			max-width: 420px;
			justify-content: left;
		}
	}

	@media screen and (max-width: 650px) {
		.job {
			flex-direction: column;
		}
	}

	@media print {
		:global(html) {
			font-size: 12px;
		}
	}
</style>

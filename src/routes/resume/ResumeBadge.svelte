<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa";

	export let href: string;
	export let icon: IconDefinition;
</script>

<span class="badge">
	<Fa {icon} scale={1.1} />
	<a {href}><slot /></a>
</span>

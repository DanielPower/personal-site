<script lang="ts">
	import chroma from "chroma-js";
	export let label: string;
	export let color: string;

	$: darkContrast = chroma.contrast(color, "black");
	$: lightContrast = chroma.contrast(color, "white");
	$: foreground = darkContrast > lightContrast ? "black" : "white";
</script>

<span class="chip" style="background-color:{color}; color:{foreground}">
	{label}
</span>

<style>
	.chip {
		font-size: 0.75rem;
		border-radius: 0.25rem;
		padding: 0.125rem 0.25rem;
	}
</style>

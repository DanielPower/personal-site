<script lang="ts">
	import { onMount } from "svelte";
	import { tsParticles, MoveDirection } from "@tsparticles/engine";
	import { loadBasic } from "@tsparticles/basic";
	import { loadWobbleUpdater } from "@tsparticles/updater-wobble";

	onMount(async () => {
		await loadBasic(tsParticles, false);
		await loadWobbleUpdater(tsParticles, false);
		await tsParticles.load({
			id: "tsparticles",
			options: {
				particles: {
					number: {
						value: 60,
					},
					move: {
						direction: MoveDirection.bottom,
						enable: true,
						random: false,
						straight: false,
					},
					opacity: {
						value: { min: 0.1, max: 0.5 },
					},
					size: {
						value: { min: 1, max: 10 },
					},
					wobble: {
						distance: 20,
						enable: true,
						speed: {
							min: -3,
							max: 3,
						},
					},
				},
			},
		});
	});
</script>

<div id="tsparticles"></div>

<style>
	#tsparticles {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>Copyright © {year}, Daniel Power</footer>

<style>
	footer {
		text-align: center;
	}

	@media print {
		footer {
			display: none;
		}
	}
</style>

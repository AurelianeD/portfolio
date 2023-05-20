<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			const body = document.querySelector('body');
			body.style.backgroundColor = 'black';
		}
	});
	onDestroy(() => {
		if (browser) {
			const body = document.querySelector('body');
			body.style.backgroundColor = 'white';
		}
	});
</script>

<div class="p-10">
	<slot />
</div>

<style>
</style>

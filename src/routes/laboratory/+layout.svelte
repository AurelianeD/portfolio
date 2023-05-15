<script>
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		const body = document.querySelector('body');
		body.style.backgroundColor = 'black';
	});
	onDestroy(() => {
		const body = document.querySelector('body');
		body.style.backgroundColor = 'white';
	});
</script>

<div class="p-10">
	<slot />
</div>

<style>
</style>

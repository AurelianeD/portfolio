<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let isReady = false;

	onMount(() => {
		isReady = true;
	});
</script>

<slot />
{#if isReady}
	<Footer />
{/if}

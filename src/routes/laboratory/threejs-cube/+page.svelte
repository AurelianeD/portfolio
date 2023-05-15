<script lang="ts">
	import { createScene } from '$src/routes/laboratory/threejs-cube/three.js';
	import { onMount } from 'svelte';

	let canvas;

	onMount(() => {
		createScene(canvas);
	});
</script>

<svelte:head>
	<title>ThreeJS Cube | Laboratoire</title>
</svelte:head>

<canvas id="bg" bind:this={canvas} />

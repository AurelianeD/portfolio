<script lang="ts">
	import { laboratory } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Laboratoire | Portfolio</title>
</svelte:head>

<div class="background">
	<a href="/" class="text-white">Retour au portfolio</a>
	<h1 class="text-center text-white">Laboratoire</h1>
	<p class="text-center text-white">Bienvenue dans mon sanctuaire d'expérimentation</p>
	{#each laboratory as project}
		<a href={project.link}>
			<div class="border-2 border-white mt-10 p-10 flex flex-col md:flex-row md:justify-between">
				<div>
					<h2 class="text-white text-2xl">{project.title.toUpperCase()}</h2>
					<p class="text-white mt-10">{project.description}</p>
				</div>
				<div class="mt-10 md:mt-0 md:max-w-[20%]">
					<img src={project.src} alt="photo du projet" class="" />
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.background {
		height: 100%;
		width: 100%;
	}
</style>

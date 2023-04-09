<script>
	import Card	from '$components/Card.svelte';
	import Header from "$components/Header.svelte";
	import About	from "$components/About.svelte";
	import { projects } from '$lib/data/projects.ts';
</script>

<div class="flex flex-col md:flex-row">
	<Header />
	<div class="max-w-[80%] mx-auto md:mx-0 md:ml-[22%] mt-[60%] md:mt-10">
		<h1 id="projects">Projets</h1>

		<div class="flex flex-col gap-6 md:flex-row md:flex-wrap">
			{#each projects as project}
				<Card title={project.title} description={project.description} src={project.src} tags="{project.tags}" cardColor={project.cardColor}/>
			{/each}
		</div>
		<About />
	</div>
</div>

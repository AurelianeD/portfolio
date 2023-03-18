<script>
	import Card	from '$components/Card.svelte';
	import { projects } from '$lib/data/projects.ts';
</script>

<h1>Projets</h1>

<div class="flex flex-col gap-6 md:flex-row md:flex-wrap">
	{#each projects as project}
		<Card title={project.title} description={project.description} src={project.src} tags="{project.tags}" cardColor={project.cardColor}/>
	{/each}
</div>

<script>
	import Card	from '$components/Card.svelte';
	import Header from "$components/Header.svelte";
	import { projects } from '$lib/data/projects.ts';
</script>

<div class="flex flex-col md:flex-row">
	<Header />
	<div class="max-w-[80%]">
		<h1>Projets</h1>

		<div class="flex flex-col gap-6 md:flex-row md:flex-wrap">
			{#each projects as project}
				<Card title={project.title} description={project.description} src={project.src} tags="{project.tags}" cardColor={project.cardColor}/>
			{/each}
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam deleniti dicta dignissimos distinctio error fuga id libero perspiciatis porro praesentium quaerat quis quo recusandae repellat sed, unde voluptatum.</p>
	</div>
</div>

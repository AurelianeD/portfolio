<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { projects } from '$lib/data/projects.ts';
	import type { Project } from '$lib/data/projects.ts';

	let isReady = false;

	onMount(() => {
		isReady = true;
	});

	function delay(project: Project) {
		return 200 * projects.indexOf(project);
	}
</script>

<svelte:head>
	<title>Auréliane Dor | Portfolio</title>
</svelte:head>

<div class="flex flex-col md:flex-row mb-10">
	<Header />
	<div class="max-w-[80%] mx-auto md:ml-[26%] mt-[10%] md:mt-10 md:mr-[5%]">
		{#if isReady}
			<h1 id="projects" in:fly={{ y: 100, duration: 1000 }}>Projets</h1>
			<section class="flex flex-col justify-between items-stretch gap-20 md:flex-row md:flex-wrap">
				{#each projects as project}
					<a
						href={project.link}
						class="no-underline"
						target="_blank"
						in:fly={{ y: 100, duration: 1000, delay: delay(project) }}
					>
						<Card
							title={project.title}
							description={project.description}
							src={project.src}
							tags={project.tags}
						/>
					</a>
				{/each}
			</section>
			<About />
		{/if}
	</div>
</div>

<script>
	import Card from '$lib/components/Card.svelte';
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { projects } from '$lib/data/projects.ts';
</script>

<div class="flex flex-col md:flex-row mb-10">
	<Header />
	<div class="max-w-[80%] mx-auto md:ml-[26%] mt-[10%] md:mt-10 md:mr-[5%]">
		<h1 id="projects">Projets</h1>
		<div class="flex flex-col justify-between items-stretch gap-20 md:flex-row md:flex-wrap">
			{#each projects as project}
				<a href={project.link} class="no-underline">
					<Card
						title={project.title}
						description={project.description}
						src={project.src}
						tags={project.tags}
						cardColor={project.cardColor}
					/>
				</a>
			{/each}
		</div>
		<About />
	</div>
</div>
<Footer />

<script lang="ts">
	import { tools } from '$lib/data/toolBox.ts';

	let containerStyle = 'flex flex-col gap-10 mt-32 md:flex-row md:justify-between';
	let toolStyle = 'flex flex-row flex-wrap gap-10 justify-center';
</script>

<div class={containerStyle}>
	<div class="md:w-[50%]">
		<h1 id="about" class="text-center md:text-left">A propos</h1>
		<p class="pb-10">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		</p>
		<a href="">CV - Téléchargement</a>
	</div>
	<div class="md:pt-10 md:w-[30%]">
		<h2 class="text-center text-[1.5em] pb-10">Ma boite à outils</h2>
		<div class={toolStyle}>
			{#each tools as tool}
				<div class="flex flex-col items-center">
					<div class="h-10 w-10 tooltip" data-tooltip={tool.name}>
						<img src={tool.icon} alt={tool.name} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.tooltip {
		position: relative;
	}
	.tooltip:before {
		content: attr(data-tooltip);
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.5rem;
		background-color: #1a202c;
		color: #fff;
		font-size: 0.875rem;
		border-radius: 0.25rem;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.2s ease-out;
	}
	.tooltip:hover:before {
		visibility: visible;
		opacity: 1;
	}
</style>

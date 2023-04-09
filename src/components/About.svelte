<script lang="ts">
	import {tools} from "$lib/data/toolBox.ts";

	let containerStyle = "flex flex-col gap-10";
	let toolStyle = "flex flex-row flex-wrap gap-10 justify-center";
</script>

<div class={containerStyle}>
	<div>
	<h1 id="about" class="text-center">A propos</h1>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
		<a>CV - Téléchargement</a>
	</div>
	<div class="">
		<p class="text-center pb-10">Ma boite à outils</p>
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

<script lang="ts">
	import { tools } from '$lib/data/toolBox.ts';

	let containerStyle = 'flex flex-col gap-10 mt-32 md:flex-row md:justify-between';
	let toolStyle = 'flex flex-row flex-wrap gap-10 justify-center';
	let href = 'src/lib/cv_aurelianedor.pdf';
</script>

<div class={containerStyle}>
	<div class="md:w-[50%]">
		<h1 id="about">A propos</h1>
		<p class="pb-10">
			Après avoir étudié l'architecture pendant 3 ans, j'ai décidé de me reconvertir dans les
			métiers du web. Au cours de mes études je me suis découvert une passion pour le développement
			web, domaine dans lequel je me spécialise depuis 2 ans. Je suis capable d'intégrer des
			maquettes et de créer des sites web dynamiques. Grace à mon exépérience en alternance, je
			monte en compétence dans le développement d'application mobiles.
		</p>
		<a {href}>CV - Téléchargement</a>
	</div>
	<div class="py-10 md:w-[30%]">
		<h2 class="text-[1.5em] pb-10">Ma boite à outils</h2>
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

<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';

	export let title: string;
	export let description: string;
	export let src: string;
	export let tags: string[];

	let containerStyle =
		'max-w-[400px] w-full h-full bg-white rounded-2xl flex flex-col overflow-hidden border-2 border-black ' +
		' md:mx-0';
	let topCardStyle = ' relative border-b-2 border-black overflow-hidden';
	let bottomCardStyle = 'py-4';
	let textStyle = 'max-w-[80%] mx-auto';
</script>

<article class={containerStyle}>
	<div class={topCardStyle}>
		<img {src} class="max-h-[150px] object-cover w-full" alt={title} />
		<Tags {tags} />
	</div>
	<div class={bottomCardStyle}>
		<div class={textStyle}>
			<p class="font-bold">{title}</p>
			<p>{description}</p>
		</div>
	</div>
</article>

<style>
</style>

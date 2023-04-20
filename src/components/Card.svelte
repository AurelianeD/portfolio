<script lang="ts">
	import Tags from '$components/Tags.svelte';

	export let title: string;
	export let description: string;
	export let src: string;
	export let tags: string[];
	export let cardColor: string;

	let containerStyle =
		'max-w-[400px] w-full rounded-2xl flex flex-col overflow-hidden border-2 border-black' +
		' md:mx-0';
	let topCardStyle = ' relative border-b-2 border-black';
	let bottomCardStyle = 'py-4';
	let textStyle = 'max-w-[80%] mx-auto';
</script>

<div class="{containerStyle} border">
	<div class={topCardStyle}>
		<img {src} class="min-h-[150px] object-cover" alt={title} />
		<Tags {tags} />
	</div>
	<div class={bottomCardStyle}>
		<div class={textStyle}>
			<p class="font-bold">{title}</p>
			<p>{description}</p>
		</div>
	</div>
</div>

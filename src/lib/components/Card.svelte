<script lang="ts">
	import Tags from '$lib/components/Tags.svelte';
	import {tweened} from "svelte/motion";
	import {cubicOut} from "svelte/easing";

	export let title: string;
	export let description: string;
	export let src: string;
	export let tags: string[];

	const shadow = tweened(0, { duration: 500, easing: cubicOut });

	function handleMouseEnter(){
		shadow.set(1)
	}
	function handleMouseLeave(){
		shadow.set(0)
	}

	let containerStyle =
		'max-w-[400px] w-full h-full bg-white rounded-2xl flex flex-col overflow-hidden border-2 border-black ' +
		' md:mx-0';
	let topCardStyle = ' relative border-b-2 border-black overflow-hidden';
	let bottomCardStyle = 'py-4';
	let textStyle = 'max-w-[80%] mx-auto';

</script>

<article
	class={containerStyle}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:touchstart={handleMouseEnter}
	on:touchend={handleMouseLeave}
	style="box-shadow: {$shadow * 6}px {$shadow * 3}px #191919, {$shadow * 12}px {$shadow * 6}px #191919, {$shadow *
	18}px {$shadow * 9}px #191919; transform: translate(0, -{$shadow * 10}px "
>
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

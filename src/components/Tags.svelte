<script lang="ts">
	export let tags: string[];

	let containerStyle =
		'flex gap-2 absolute bottom-1 left-2 overflow-scroll w-[95%] no-scrollbar pb-3';
	let tagStyle = 'bg-white rounded-full  drop-shadow-md';
	let textStyle = 'whitespace-nowrap font-bold py-1 px-5';
</script>

<div class={containerStyle}>
	{#each tags as tag}
		<div class={tagStyle}>
			<p class={textStyle}>{tag}</p>
		</div>
	{/each}
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>

<script lang="ts">
	export let tags: string[];
</script>

<div class="flex gap-2 absolute bottom-2 left-2 overflow-scroll w-[95%] no-scrollbar">
	{#each tags as tag}
		<div class="bg-white rounded-full py-1 px-5">
			<p class="whitespace-nowrap	font-bold">{tag}</p>
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

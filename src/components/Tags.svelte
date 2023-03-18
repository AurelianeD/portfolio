<script lang="ts">
	export let tags: string[];
</script>

<div class="flex gap-2 absolute bottom-2 left-2 overflow-scroll w-[95%] no-scrollbar">
	{#each tags as tag}
		<div class="bgColor rounded-full py-1 px-5">
			<span class="whitespace-nowrap	">{tag}</span>
		</div>
	{/each}
</div>

<style>
	.bgColor {
		background-color: #bf4194;
	}
 /* Hide scrollbar for Chrome, Safari and Opera */
 .no-scrollbar::-webkit-scrollbar {
     display: none;
 }

 /* Hide scrollbar for IE, Edge and Firefox */
 .no-scrollbar {
     -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
 }
</style>

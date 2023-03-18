<script lang="ts">
	import Tags from "$components/Tags.svelte";

	export let title: string;
	export let description: string;
	export let src: string;
	export let tags: string[];
	export let cardColor: string;

	let containerStyle = "max-w-[400px] w-[70%] my-0 mx-auto rounded-2xl flex flex-col overflow-hidden";
	let topCardStyle = " bg-purple relative";
	let bottomCardStyle = " py-4";
	let textStyle = "max-w-[80%] mx-auto text-white"

</script>

<div class='{containerStyle} border'>
	<div class={topCardStyle}>
		<img {src} class="min-h-[150px] object-cover"/>
		<Tags tags={tags} />
	</div>
	<div class="{bottomCardStyle} bgColor">
		<div class={textStyle}>
			<p>{title}</p>
			<p>{description.substring(0, 30)}...</p>
		</div>
	</div>
</div>

<style>
.bgColor {
		background-color: #bf4194;
	}
.border{
		border: 2px solid #bf4194;
}
</style>

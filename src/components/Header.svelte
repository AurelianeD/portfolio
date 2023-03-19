<script lang="ts">
	import {contacts} from "$lib/data/contact.ts";

	let src ="src/lib/images/velonimo.png";
</script>


<div class="p-6 rounded-b-2xl border-black border-2 md:max-w-[20%] self-start">
	<div class="flex flex-row pb-10 md:flex-col">
		<div class="w-[100px] border-2 border-black rounded-full overflow-hidden h-[100px] md:w-[100px]">
			<img {src} class="object-contain"/>
		</div>
		<p class="min-w-[60%] my-0 mx-auto md:">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</div>
	<div class="flex justify-evenly">
		{#each contacts as contact}
			<a href={contact.link}>
				<img src={contact.icon} alt="" class="max-w-[50px]">
			</a>
		{/each}
	</div>
</div>

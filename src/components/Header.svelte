<script lang="ts">
	import {contacts} from "$lib/data/contact.ts";
	import type {Contact} from "$lib/data/contact.ts";
	let src ="src/lib/images/aureliane.png";
</script>


<div
	class="
		px-6 py-5 rounded-b-2xl border-black border-2 fixed z-10 bg-white
		md:max-w-[20%] md:h-screen md:py-[5%] md:flex md:flex-col md:justify-between
">
	<div class="flex flex-row justify-between items-center pb-10 md:pb-0 md:flex-col">
		<div class="border-2 border-black overflow-hidden h-20 w-20 rounded-full md:h-40 md:w-40">
			<img {src} class="object-cover" alt="photo de profil">
		</div>
		<p class="w-[70%] md:self-start md:w-full md:pt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</div>
	<ul class=" flex gap-6 justify-around underline md:flex-col">
		<li>
			<a href="#projects">Mes projets</a>
		</li>
		<li>
			<a href="#about">A propos</a>
		</li>
	</ul>
	<div class="hidden md:block">
		<p class="pb-[10%]">Restons en contact :</p>
		<div class="md:flex md:justify-evenly">
		{#each contacts as contact}
			<a href={contact.link}>
				<img src={contact.icon} alt="icon réseaux sociaux" class="max-w-[50px]">
			</a>
		{/each}
		</div>
	</div>
</div>

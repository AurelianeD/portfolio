<script lang="ts">
	import { contacts } from '$lib/data/contact.ts';
	let src = 'src/lib/images/aureliane.png';

	let containerStyle =
		'px-6 py-5 border-black border-2 z-10 bg-white ' +
		'md:max-w-[20%] md:h-screen md:py-[5%] md:flex md:flex-col md:justify-between md:fixed';
	let topHeaderStyle = 'flex flex-col justify-between items-center pb-10 ' + 'md:pb-0 md:flex-col';
	let imgStyle = 'border-2 border-black overflow-hidden rounded-full ' + 'h-40 w-40';
	let textStyle = 'w-full pt-10 ' + 'md:self-start md:w-full ';
	let listStyle = 'flex gap-6 justify-around underline ' + 'md:flex-col';
</script>

<div class={containerStyle}>
	<div class={topHeaderStyle}>
		<div class={imgStyle}>
			<img {src} class="object-cover" alt="photo de profil" />
		</div>
		<p class={textStyle}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit.
		</p>
	</div>
	<ul class={listStyle}>
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
					<img src={contact.icon} alt="icon réseaux sociaux" class="max-w-[50px]" />
				</a>
			{/each}
		</div>
	</div>
</div>

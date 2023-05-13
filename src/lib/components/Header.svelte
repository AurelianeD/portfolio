<script lang="ts">
	import { contacts } from '$lib/data/contact.ts';
	let src = '/images/aureliane.png';

	let containerStyle =
		'px-6 py-5 border-black border-b-2 z-10 bg-white ' +
		'md:max-w-[20%] md:h-screen md:py-[5%] md:flex md:flex-col md:justify-between md:fixed md:border-r-2 md:border-b-0';
	let topHeaderStyle = 'flex flex-col justify-between items-center pb-10 ' + 'md:pb-0 md:flex-col';
	let imgStyle = 'border-2 border-black overflow-hidden rounded-full ' + 'h-40 w-40';
	let textStyle = 'w-full pt-10 flex flex-col gap-4 ' + 'md:self-start md:w-full ';
	let listStyle = 'flex gap-6 justify-around underline ' + 'md:flex-col';
</script>

<div class={containerStyle}>
	<div class={topHeaderStyle}>
		<div class={imgStyle}>
			<img {src} class="object-cover translate-y-[-20px]" alt="photo de profil" />
		</div>
		<div class={textStyle}>
			<p>Auréliane Dor <span class="font-bold">développeuse front-end junior</span></p>
			<p>
				BUT Métiers du Multimédia et de l'Internet (MMI) - <span class="font-bold"
					>IUT Bordeaux Montaigne</span
				>
			</p>
			<p>
				Alternante en <span class="font-bold">développement mobile</span> -
				<a href="https://www.agenceminuit.com/" target="_blank">minuit.agency</a>
			</p>
		</div>
	</div>
	<ul class={listStyle}>
		<li>
			<a href="#projects">Projets</a>
		</li>
		<li>
			<a href="#about">A propos</a>
		</li>
		<li>
			<a href="/laboratory">Laboratoire</a>
		</li>
	</ul>
	<div class="hidden md:block">
		<p class="pb-[10%]">Restons en contact :</p>
		<div class="md:flex md:justify-evenly">
			{#each contacts as contact}
				<a href={contact.link} target="_blank">
					<img src={contact.icon} alt="icon réseaux sociaux" class="max-w-[50px]" />
				</a>
			{/each}
		</div>
	</div>
</div>

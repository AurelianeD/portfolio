<script>
	import { alignCube, clearCubes } from '$src/routes/laboratory/threejs-cube/three.js';
</script>

<main>
	<slot />
	<div class="button">
		<a href="/laboratory">Retour au profil</a>
		<button style="padding-right: 20px" on:click={() => alignCube()}>Aligner les cubes</button>
		<button on:click={() => clearCubes()}>Supprimer les cubes</button>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	.button {
		color: red;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

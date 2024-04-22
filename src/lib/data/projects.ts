export type Project = {
	id: number;
	title: string;
	description: string;
	src: string;
	tags: string[];
	link: string;
};

export const projects: Project[] = [
	{
		id: 1,
		title: 'Dose ta dose',
		description: 'Kit de sensibilisation à l’alcool à destination des infirmier(e)s des collèges.',
		src: '/images/dosetadose.png', //TODO: changer l'image de courverture
		tags: ['SvelteKit', 'Typescript'],
		link: 'https://dosetadose.mmibordeaux.com',
	},
	{
		id: 1,
		title: 'Tetyana',
		description: 'Raconter le parcours d’une réfugié ukrainienne au travers d’une expérience numérique',
		src: '/images/tetyana.png', //TODO: changer l'image de courverture
		tags: ['ThreeJS', 'SvelteKit'],
		link: 'https://tetyana.les-voix-errantes-de-kyiv.fr/',
	},
	{
		id: 4,
		title: 'Embrouille au Musée - Projet MMI',
		description:
			"Expérience interactive sous forme d’une application web en partenariat avec le musée des Beaux Arts de Bordeaux à l'occasion de la Bachanight 2023.",
		src: '/images/embrouille.png',
		tags: ['Svelte Kit', 'TailwindCSS', 'Typescript'],
		link: 'https://embrouille-au-musee.netlify.app/',
	},
	{
		id: 5,
		title: 'The Mournful Painter - Projet MMI',
		description: 'Jeux vidéo platformer en 2D, développé en C# avec Unity.',
		src: '/images/painter.png',
		tags: ['Unity', 'C#'],
		link: 'https://la-machine-a-cafe.itch.io/the-mournful-painter',
	},
	{
		id: 6,
		title: 'Safe and Tech - Projet MMI',
		description:
			'Solution web responsive pour s’informer et se tester autrement sur l’hygiène informatique.',
		src: '/images/safentech.png',
		tags: ['Hugo', 'TailwindCSS'],
		link: 'https://safe-n-tech.netlify.app/',
	},
	{
		id: 3,
		title: 'Mon panier MIC',
		description: 'Site e-commerce Prestashop destiné la vente des produits des producteurs locaux.',
		src: '/images/mic.png',
		tags: ['Prestashop'],
		link: 'https://monpanier-mic.com/index.php',
	},
];

export const laboratory: Project[] = [
	{
		id: 1,
		title: 'Three.js Cubes',
		description: 'Premier essai avec Three.js - Cliquez dans la scène pour y ajouter des cubes',
		src: '/images/threejsCubes.png',
		tags: ['Three.js'],
		link: 'laboratory/threejs-cube/',
	},
	{
		id: 1,
		title: 'Velonimo',
		description:
			'Mon tout premier projet en React ! Cette application web permet de compter les points d’une partie du jeu de carte Vélonimo.',
		src: '/images/velonimo.png',
		tags: ['React', 'TailwindCSS'],
		link: 'https://velonimo.aureliane.dev/',
	},
	//TODO: Ajouter space tourime
];

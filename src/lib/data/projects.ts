export type Project = {
	title: string;
	description: string;
	src: string;
	tags: string[];
	link: string;
};

export const projects: Project[] = [
	{
		title: 'Velonimo',
		description:
			'Application web React permettant de compter les points au fur et à mesure d’une partie de Vélonimo.',
		src: '/images/velonimo.png',
		tags: ['React', 'TailwindCSS'],
		link: 'https://velonimo.aureliane.dev/'
	},
	{
		title: 'Space Tourism',
		description: 'Projet Frontend Mentor, site static responsive en Svelte.',
		src: '/images/space.png',
		tags: ['Svelte', 'TailwindCSS'],
		link: 'https://space-tourisme.aureliane.dev/'
	},
	{
		title: 'Mon panier MIC',
		description: 'Site e-commerce Prestashop destiné la vente des produits des producteurs locaux.',
		src: '/images/mic.png',
		tags: ['Prestashop'],
		link: 'https://monpanier-mic.com/index.php'
	},
	{
		title: 'Embrouille au Musée - Projet MMI',
		description:
			"Expérience interactive sous forme d’une application web en partenariat avec le musée des Beaux Arts de Bordeaux à l'occasion de la Bachanight 2023.",
		src: '/images/embrouille.png',
		tags: ['Svelte Kit', 'TailwindCSS', 'Typescript'],
		link: 'https://embrouille-au-musee.netlify.app/'
	},
	{
		title: 'The Mournful Painter - Projet MMI',
		description: 'Jeux vidéo platformer en 2D, développé en C# avec Unity.',
		src: '/images/painter.png',
		tags: ['Unity', 'C#'],
		link: 'https://la-machine-a-cafe.itch.io/the-mournful-painter'
	},
	{
		title: 'Safe and Tech - Projet MMI',
		description:
			'Solution web responsive pour s’informer et se tester autrement sur l’hygiène informatique.',
		src: '/images/safentech.png',
		tags: ['Hugo', 'TailwindCSS'],
		link: 'https://safe-n-tech.netlify.app/'
	}
];

export const laboratory: Project[] = [
	{
		title: 'Three.js Cubes',
		description: 'Premier essai avec Three.js - Cliquez dans la scène pour y ajouter des cubes',
		src: '/images/threejsCubes.png',
		tags: ['Three.js'],
		link: 'laboratory/threejs-cube/'
	}
];

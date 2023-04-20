export type Projects = {
	title: string;
	description: string;
	src: string;
	tags: string[];
	cardColor: string;
};

export const projects: Projects[] = [
	{
		title: 'Velonimo',
		description:
			'Application web React permettant de compter les points au fur et à mesure d’une partie de Vélonimo.',
		src: 'src/lib/images/velonimo.png',
		tags: ['React', 'TailwindCSS'],
		cardColor: '#bf4194'
	},
	{
		title: 'Space Tourism',
		description: 'Projet frontend Mentor, site responsive en Svelte.',
		src: 'src/lib/images/space.png',
		tags: ['Svelte', 'TailwindCSS'],
		cardColor: '#bf4194'
	},
	{
		title: 'Mon panier MIC',
		description: 'Site web Prestashop pour la vente de produits des producteurs locaux.',
		src: 'src/lib/images/mic.png',
		tags: ['Prestashop'],
		cardColor: '#bf4194'
	},
	{
		title: 'Embrouille au Musée - Projet MMI',
		description:
			'Expérience interactive sous forme d’une application web en partenariat avec le musée des Beaux Arts de Bordeaux.',
		src: 'src/lib/images/embrouille.png',
		tags: ['Svelte Kit', 'TailwindCSS', 'Typescript'],
		cardColor: '#bf4194'
	},
	{
		title: 'The Mournful Painter - Projet MMI',
		description: 'Jeux vidéo platformer en 2D, développé en C# avec Unity.',
		src: 'src/lib/images/painter.png',
		tags: ['Unity', 'C#'],
		cardColor: '#bf4194'
	},
	{
		title: 'Safe and Tech - Projet MMI',
		description:
			'Solution web responsive pour s’informer et se tester autrement sur l’hygiène informatique (quiz, classement par catégories des bonnes pratiques et leurs risques associé).',
		src: 'src/lib/images/safentech.png',
		tags: ['Hugo', 'TailwindCSS'],
		cardColor: '#bf4194'
	}
];

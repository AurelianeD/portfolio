export type Projects = {
	title: string;
	description: string;
	src: string;
	tags: string[];
	cardColor: string;
	link: string;
};

export const projects: Projects[] = [
	{
		title: 'Velonimo',
		description:
			'Application web React permettant de compter les points au fur et à mesure d’une partie de Vélonimo.',
		src: 'src/lib/images/velonimo.png',
		tags: ['React', 'TailwindCSS'],
		cardColor: '#bf4194',
		link: 'https://velonimo.aureliane.dev/'
	},
	{
		title: 'Space Tourism',
		description: 'Projet frontend Mentor, site responsive en Svelte.',
		src: 'src/lib/images/space.png',
		tags: ['Svelte', 'TailwindCSS'],
		cardColor: '#bf4194',
		link: 'https://space-tourisme.aureliane.dev/'
	},
	{
		title: 'Mon panier MIC',
		description: 'Site web Prestashop pour la vente de produits des producteurs locaux.',
		src: 'src/lib/images/mic.png',
		tags: ['Prestashop'],
		cardColor: '#bf4194',
		link: 'https://monpanier-mic.com/index.php'
	},
	{
		title: 'Embrouille au Musée - Projet MMI',
		description:
			'Expérience interactive sous forme d’une application web en partenariat avec le musée des Beaux Arts de Bordeaux.',
		src: 'src/lib/images/embrouille.png',
		tags: ['Svelte Kit', 'TailwindCSS', 'Typescript'],
		cardColor: '#bf4194',
		link: 'https://embrouille-au-musee.netlify.app/'
	},
	{
		title: 'The Mournful Painter - Projet MMI',
		description: 'Jeux vidéo platformer en 2D, développé en C# avec Unity.',
		src: 'src/lib/images/painter.png',
		tags: ['Unity', 'C#'],
		cardColor: '#bf4194',
		link: 'https://la-machine-a-cafe.itch.io/the-mournful-painter'
	},
	{
		title: 'Safe and Tech - Projet MMI',
		description:
			'Solution web responsive pour s’informer et se tester autrement sur l’hygiène informatique (quiz, classement par catégories des bonnes pratiques et leurs risques associé).',
		src: 'src/lib/images/safentech.png',
		tags: ['Hugo', 'TailwindCSS'],
		cardColor: '#bf4194',
		link: 'https://safe-n-tech.netlify.app/'
	}
];

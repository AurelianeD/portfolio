export type Contact = {
	name: string,
	link: string,
	icon: string,
}

export const contacts: Contact[] = [
	{
		name: 'github',
		link: 'https://github.com/AurelianeD',
		icon: 'src/lib/icons/github.png',
	},
	{
		name: 'linkdIn',
		link: 'https://www.linkedin.com/in/aur%C3%A9liane-dor-992967200/',
		icon: 'src/lib/icons/linkedin.png'
	},
	{
		name: 'email',
		link: 'mailto:aureliane.dor@gmail.com',
		icon: 'src/lib/icons/email.png'
	}
]

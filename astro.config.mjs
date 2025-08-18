// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TechRich - Personal Website',
			description: 'Personal website showcasing my work, skills, and interests',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'TechRich Logo',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/TechRich' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/techrich' },
				{ icon: 'email', label: 'Email', href: 'mailto:hello@about.techrich.net' },
			],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Welcome', link: '/' },
						{ label: 'About', link: '/about/' },
						{ label: 'Contact', link: '/contact/' },
					],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/favicon.svg',
					},
				},
			],
			favicon: '/favicon.svg',
			editLink: {
				baseUrl: 'https://github.com/TechRich/TechRich.github.io/edit/main/',
			},
			lastUpdated: true,
			pagination: true,
		}),
	],
	site: 'https://about.techrich.net',
});

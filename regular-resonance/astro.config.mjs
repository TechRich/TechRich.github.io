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
				{ icon: 'mail', label: 'Email', href: 'mailto:hello@about.techrich.net' },
			],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Welcome', link: '/' },
					],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Content Editor', link: '/docs/editor/' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Modern Web Apps', link: '/docs/guides/modern-web-apps/' },
						{ label: 'Future of Web Dev', link: '/docs/guides/future-web-dev/' },
						{ label: 'OSS Best Practices', link: '/docs/guides/oss-best-practices/' },
					],
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
			search: {
				provider: 'local',
			},
		}),
	],
	site: 'https://about.techrich.net',
});

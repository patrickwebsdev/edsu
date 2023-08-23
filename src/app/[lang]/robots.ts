import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: 'https://edsu.net/sitemap.xml',
		host: 'https://edsu.net',
	};
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://edsu.net',
			lastModified: new Date(),
		},
		{
			url: 'https://edsu.net/en',
			lastModified: new Date(),
		},
		{
			url: 'https://edsu.net/es',
			lastModified: new Date(),
		},
	];
}

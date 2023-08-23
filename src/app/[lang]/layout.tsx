import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.css';
import '@fontsource-variable/montserrat';

export const metadata: Metadata = {
	title: 'EDSU Lumber',
	description: 'Focused on delivering only the best lumber',
	metadataBase: new URL('https://edsu.net'),
	themeColor: '#DC8723',
	alternates: {
		canonical: 'https://edsu.net',
		languages: {
			'en-US': 'https://edsu.net/en',
			'es-ES': 'https://edsu.net/es',
			'x-default': 'https://edsu.net/en',
		},
	},
	icons: {
		shortcut: { url: 'https://edsu.net/favicon.ico', type: 'image/x-icon' },
		icon: [
			{ url: 'https://edsu.net/favicon.ico', type: 'image/x-icon' },
			{
				url: 'https://edsu.net/favicons/safari-pinned-tab',
				type: 'image/svg+xml',
			},
			{
				url: 'https://edsu.net/favicons/favicon-16x16.png',
				type: 'image/png',
				sizes: '16x16',
			},
			{
				url: 'https://edsu.net/favicons/favicon-32x32.png',
				type: 'image/png',
				sizes: '32x32',
			},
			{
				url: 'https://edsu.net/favicons/android-chrome-192x192',
				type: 'image/png',
				sizes: '192x192',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'EDSU Lumber',
		description: 'Focused on delivering only the best lumber',
		images: ['https://edsu.net/logo.webp'],
	},
	openGraph: {
		url: 'https://edsu.net',
		siteName: 'EDSU Lumber',
		images: [
			{
				url: 'https://edsu.net/logo.webp',
				width: 1024,
				height: 711,
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='scroll-smooth' lang='en'>
			<body>{children}</body>
		</html>
	);
}

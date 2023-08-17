import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.css';
import '@fontsource-variable/montserrat';

export const metadata: Metadata = {
	icons: {
		icon: '/icon.png',
		shortcut: '/shortcut-icon.png',
		apple: '/apple-icon.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/apple-touch-icon-precomposed.png',
		},
	},
	twitter: {
		card: 'summary_large_image',
		title: 'EDSU',
		description: 'Focused on delivering only the best lumber',
		images: ['/logo.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='scroll-smooth' lang='en'>
			<Head>
				<link
					rel='android-chrome'
					sizes='512x512'
					href='/favicons/android-chrome-512x512.png'
				/>
				<link
					rel='android-chrome'
					sizes='192x192'
					href='/favicons/android-chrome-192x192.png'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicons/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicons/site.webmanifest' />
				<meta name='msapplication-TileColor' content='#DC8723' />
				<meta name='theme-color' content='#DC8723' />
				<link rel='alternate' href='https://edsu.net/' hrefLang='x-default' />
				<link rel='alternate' href='https://edsu.net/es' hrefLang='es' />
			</Head>
			<body>{children}</body>
		</html>
	);
}

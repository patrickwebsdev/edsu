import Separator from '@/components/Separator';
import About from '@/features/About';
import Caracteristics from '@/features/Caracteristics';
import Contact from '@/features/Contact';
import Footer from '@/features/Footer';
import Hero from '@/features/Hero';
import Nav from '@/features/Nav';
import Products from '@/features/Products';
import Wholesaler from '@/features/Wholesaler';
import Work from '@/features/Work';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'EDSU',
	description: 'Focused on delivering only the best lumber',
};

export default function Home() {
	return (
		<>
			<Nav lang='en' />
			<Hero lang='en' />
			<Caracteristics lang='en' />
			<About lang='en' />
			<Wholesaler lang='en' />
			<Separator />
			<Products lang='en' />
			<Contact lang='en' />
			<Work lang='en' />
			<Footer lang='en' />
		</>
	);
}

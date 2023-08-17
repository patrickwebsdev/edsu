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

export default function Home() {
	return (
		<>
			<Nav lang='es' />
			<Hero lang='es' />
			<Caracteristics lang='es' />
			<About lang='es' />
			<Wholesaler lang='es' />
			<Separator />
			<Products lang='es' />
			<Contact lang='es' />
			<Work lang='es' />
			<Footer lang='es' />
		</>
	);
}

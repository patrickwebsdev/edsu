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
import { Locale } from '../../i18n-config';

export default async function IndexPage({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	return (
		<>
			<Nav lang={lang} />
			<Hero lang={lang} />
			<Caracteristics lang={lang} />
			<About lang={lang} />
			<Wholesaler lang={lang} />
			<Separator />
			<Products lang={lang} />
			<Contact lang={lang} />
			<Work lang={lang} />
			<Footer lang={lang} />
		</>
	);
}

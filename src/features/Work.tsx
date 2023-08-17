import Carousel from '@/components/Carousel';
import YoutubeVideo from '@/components/YoutubeVideo';
import langData from '@/data/lang.json';
import Langs from '@/interfaces/Langs';

const Work = ({ lang = 'es' }: Langs) => {
	return (
		<section className='bg-primary pb-10'>
			<h2 className='lg:text-4xl md:text-3xl text-2xl py-12 text-white font-bold text-center'>
				{langData.work.title[lang]}
			</h2>
			<div className='max-w-screen-xl mx-auto px-3 grid lg:grid-cols-2 grid-cols-1 gap-6 [&>div>iframe]:w-full lg:[&>div>iframe]:h-full'>
				<YoutubeVideo />
				<div className='w-full'>
					<Carousel />
				</div>
			</div>
		</section>
	);
};
export default Work;

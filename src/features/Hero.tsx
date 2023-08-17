import ImageText from '@/components/ImageText';

import langData from '@/data/lang.json';

import Langs from '@/interfaces/Langs';

const Icons = [
	{
		image: '/cocobolo.png',
		title: 'Cocobolo',
	},
	{
		image: '/cocobolo.png',
		title: 'Cocobolo',
	},
	{
		image: '/cocobolo.png',
		title: 'Cocobolo',
	},
	{
		image: '/cocobolo.png',
		title: 'Cocobolo',
	},
	{
		image: '/cocobolo.png',
		title: 'Cocobolo',
	},
];

const Hero = ({ lang = 'es' }: Langs): JSX.Element => {
	return (
		<section className='min-h-screen h-full bg-hero bg-no-repeat bg-center bg-cover px-4 mx-auto flex justify-center items-center sm:px-6 md:px-12 lg:px-24 lg:py-24'>
			<div className='flex flex-col w-full text-center md:gap-16 gap-10 max-w-7xl'>
				<h1 className='max-w-5xl text-4xl font-bold leading-none tracking-tighter text-white  md:text-5xl lg:text-6xl lg:max-w-7xl'>
					{langData.hero.title[lang]}
				</h1>
				<div className='flex md:flex-row flex-col gap-3 max-w-xl mx-auto w-full justify-center'>
					<a
						href='#wholesaler'
						className='bg-primary w-60 md:w-auto flex-1 p-4 font-bold self-center'
					>
						{langData.hero.button.wholesaler[lang]}
					</a>
					<a
						href='#products'
						className='bg-primary w-60 md:w-auto flex-1 p-4 font-bold self-center'
					>
						{langData.hero.button.product[lang]}
					</a>
				</div>
				{/* <div className='flex flex-wrap max-w-3xl w-full mx-auto [&>div]:flex-[0_0_33.33%] md:[&>div]:flex-[0_0_20%] gap-y-5 justify-center md:[&>div>img]:h-28 md:[&>div>img]:w-28 xxs:[&>div>img]:w-24 xxs:[&>div>img]:h-24 [&>div>img]:h-16 [&>div>img]:w-16'>
					{Icons.map((icon) => (
						<ImageText key={icon.title} image={icon.image} title={icon.title} />
					))}
				</div> */}
			</div>
		</section>
	);
};
export default Hero;

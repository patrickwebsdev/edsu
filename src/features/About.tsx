import langData from '@/data/lang.json';

import Langs from '@/interfaces/Langs';

const About = ({ lang = 'es' }: Langs) => {
	return (
		<section
			className='bg-primary grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 mx-auto lg:px-0'
			id='about'
		>
			<div className='bg-about bg-no-repeat bg-cover flex flex-col justify-center items-center text-center lg:min-h-96 lg:h-full'>
				<h2 className='text-white font-extrabold lg:text-5xl text-3xl py-24 sm:py-56'>
					{langData.about.title[lang]}
				</h2>
			</div>
			<div className='flex flex-col justify-center items-center p-3'>
				<p className='text-white font-[600] lg:text-2xl lg:p-10 p-5 text-center lg:Text-left'>
					{langData.about.text[lang]}
				</p>
			</div>
		</section>
	);
};
export default About;

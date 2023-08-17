import EmailSVG from '@/icons/EmailSVG';
import PhoneSVG from '@/icons/PhoneSVG';
import langData from '@/data/lang.json';
import Langs from '@/interfaces/Langs';
import Image from 'next/image';

const Contact = ({ lang = 'es' }: Langs) => {
	return (
		<section
			className='bg-contact bg-no-repeat bg-cover py-20 px-5 flex flex-col justify-center items-center mt-10 gap-2 lg:gap-3'
			id='contact'
		>
			<Image
				src='/logo.png'
				alt='EDSU'
				className='max-h-28'
				width={96}
				height={66}
			/>
			<h1 className='text-white font-bold lg:text-4xl md:text-2xl text-xl max-w-2xl text-center'>
				{langData.contact.title[lang]}
			</h1>
			<h2 className='text-white font-semibold text-center text-xl'>
				{langData.contact.subtitle[lang]}
			</h2>
			<ul className='text-white text-lg text-center [&>li]:flex [&>li]:gap-1 [&>li]:font-semibold [&>li]:fill-white [&>li]:items-center [&>li]:justify-center'>
				<li>
					<PhoneSVG className='w-4' /> +593 XX XX XXX
				</li>
				<li>
					<EmailSVG className='w-4' /> contact@edsu.com
				</li>
			</ul>
		</section>
	);
};
export default Contact;

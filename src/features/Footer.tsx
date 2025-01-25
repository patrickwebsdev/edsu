import EmailSVG from '@/icons/EmailSVG';
import FacebookSVG from '@/icons/FacebookSVG';
import InstagramSVG from '@/icons/InstagramSVG';
import LinkedinSVG from '@/icons/LinkedinSVG';
import langData from '@/data/lang.json';
import Langs from '@/interfaces/Langs';
import Image from 'next/image';
import MapPinSVG from '@/icons/MapPinSVG';

const Footer = ({ lang = 'es' }: Langs) => {
	return (
		<footer className='bg-secondary-0'>
			<div className='max-w-screen-xl px-3 mx-auto grid md:grid-cols-3 gap-10 grid-cols-1 py-5'>
				<div className='flex flex-col justify-center items-center gap-y-2'>
					<Image
						src='/logo.webp'
						className='w-24'
						alt='EDSU'
						width={80}
						height={56}
					/>
					<p className='text-white font-semibold text-center px-3 max-w-[300px]'>
						Focused on delivering only the best lumber
					</p>
					<p className='text-white font-semibold text-center px-3'>
						Sustainably sourced Timber
					</p>
				</div>
				<div className='flex flex-col'>
					<h3 className='text-primary relative font-bold after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-[2px] after:w-[65%] place-self-start mb-3'>
						{langData.footer.contact[lang]}
					</h3>
					<ul className='text-white font-semibold [&>li>*]:text-white [&>li>*]:fill-white [&>li>*]:flex [&>li>*]:gap-x-1 gap-y-2 flex flex-col'>
						<li>
							<a href='mailto:lenin@edsu.net'>
								<EmailSVG className='w-4' /> lenin@edsu.net -{' '}
								{langData.contact.contact[lang]}
							</a>
						</li>
						<li>
							<a href='mailto:info@edsu.net'>
								<EmailSVG className='w-4' /> info@edsu.net -{' '}
								{langData.contact.contact[lang]}
							</a>
						</li>
						<li>
							<p>
								<MapPinSVG className='w-4' /> Ecuador, Manabi, Manta, av 4 de
								noviembre calle 118 y 119
							</p>
						</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h3 className='text-primary relative font-bold after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-[2px] after:w-[65%] place-self-start mb-3'>
						{langData.footer.follow[lang]}
					</h3>
					<div className='flex text-white fill-white gap-1'>
						<a href=''>
							<InstagramSVG className='w-6' />
						</a>
						<a href=''>
							<FacebookSVG className='w-6' />
						</a>
						<a href=''>
							<LinkedinSVG className='w-6' />
						</a>
					</div>
				</div>
			</div>
			<div className='w-full bg-white'>
				<div className='max-w-screen-xl px-3 mx-auto py-4'>
					<p className='font-bold text-sm'>{langData.footer.copyright[lang]}</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;

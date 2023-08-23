import MapMarker from '@/components/MapMarker';
import EmailSVG from '@/icons/EmailSVG';
import FacebookSVG from '@/icons/FacebookSVG';
import InstagramSVG from '@/icons/InstagramSVG';
import LinkedinSVG from '@/icons/LinkedinSVG';
import PhoneSVG from '@/icons/PhoneSVG';
import langData from '@/data/lang.json';
import Langs from '@/interfaces/Langs';
import Image from 'next/image';

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
					<ul className='text-white font-semibold [&>li>a]:text-white [&>li>a]:fill-white [&>li>a]:flex [&>li>a]:gap-x-1 gap-y-2 flex flex-col'>
						<li>
							<a href='tel:+593981786594'>
								<PhoneSVG className='w-4' /> +593 98 178 6594 -{' '}
								{langData.contact.management[lang]}
							</a>
						</li>
						<li>
							<a href='mailto:edwin@edsu.net'>
								<EmailSVG className='w-4' /> edwin@edsu.net -{' '}
								{langData.contact.management[lang]}
							</a>
						</li>
						<li>
							<a href='mailto:jacky@edsu.net'>
								<EmailSVG className='w-4' /> jacky@edsu.net -{' '}
								{langData.contact.contact[lang]}
							</a>
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

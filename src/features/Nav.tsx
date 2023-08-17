'use client';

import { useState } from 'react';

import langData from '@/data/lang.json';
import Dropdown from '@/components/Dropdown';
import Hamburguer from '@/icons/Hamburguer';
import Image from 'next/image';

type NavLangs = 'es' | 'en';

type NavOptions = {
	lang: NavLangs;
};

export default function Nav({ lang }: NavOptions) {
	const [open, setOpen] = useState(false);

	return (
		<nav className='bg-secondary-0 sticky top-[0px] w-full z-[100]'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-3'>
				<a href='#' className='flex items-center'>
					<Image
						src='/logo.png'
						className='h-14 mr-3'
						alt='EDSU'
						width={80}
						height={56}
					/>
				</a>
				<div className='flex items-center md:order-2'>
					<Dropdown lang={lang} />
					<button
						data-collapse-toggle='navbar-dropdown'
						type='button'
						className='inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent'
						aria-controls='navbar-dropdown'
						aria-expanded='false'
						onClick={() => setOpen(!open)}
					>
						<span className='sr-only'>{langData.menu.open[lang]}</span>
						<Hamburguer />
					</button>
				</div>
				<div
					className={`${open ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}
					id='navbar-dropdown'
				>
					<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 [&>li>a]:text-primary [&>li>a]:opacity-80 hover:[&>li>a]:opacity-100'>
						<li>
							<a
								href='#'
								className='block py-2 pl-3 pr-4 !opacity-100'
								onClick={() => setOpen(!open)}
							>
								{langData.menu.home[lang]}
							</a>
						</li>
						<li>
							<a
								href='#about'
								className='block py-2 pl-3 pr-4'
								onClick={() => setOpen(!open)}
							>
								{langData.menu.about[lang]}
							</a>
						</li>
						<li>
							<a
								href='#wholesaler'
								className='block py-2 pl-3 pr-4'
								onClick={() => setOpen(!open)}
							>
								{langData.menu.wholesalers[lang]}
							</a>
						</li>
						<li>
							<a
								href='#products'
								className='block py-2 pl-3 pr-4'
								onClick={() => setOpen(!open)}
							>
								{langData.menu.products[lang]}
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className='block py-2 pl-3 pr-4'
								onClick={() => setOpen(!open)}
							>
								{langData.menu.contact[lang]}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

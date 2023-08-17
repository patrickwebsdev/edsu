import DropdownArrow from '@/icons/DropdownArrow';
import EnglishSVG from '@/icons/EnglishSVG';
import SpanishSVG from '@/icons/SpanishSVG';
import Link from 'next/link';
import { useState } from 'react';

import langData from '@/data/lang.json';

type DropdownLang = 'es' | 'en';

type DropdownOptions = {
	lang: DropdownLang;
};

const Dropdown = ({ lang }: DropdownOptions) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='relative flex flex-col items-center'>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className='text-primary flex gap-1 items-center p-2'
			>
				{lang === 'en' ? (
					<>
						<EnglishSVG />
						{langData.menu.english[lang]}
					</>
				) : (
					<>
						<SpanishSVG />
						{langData.menu.spanish[lang]}
					</>
				)}
				<DropdownArrow open={isOpen} />
			</button>
			{isOpen && (
				<ul className='bg-secondary-100 absolute top-10 rounded-md w-full [&>li>a]:flex [&>li>a]:gap-1 hover:[&>li]:bg-gray-500 [&>li>a]:p-2 [&>li>a]:w-full [&>li]:text-white'>
					<li>
						<Link href='/en' locale={false}>
							<EnglishSVG />
							{langData.menu.english[lang]}
						</Link>
					</li>
					<li>
						<Link href='/es' locale={false}>
							<SpanishSVG />
							{langData.menu.spanish[lang]}
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};
export default Dropdown;

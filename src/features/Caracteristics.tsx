import IconText from '@/components/IconText';
import DolarSVG from '@/icons/DolarSVG';
import RecycleSVG from '@/icons/RecycleSVG';
import TreeSVG from '@/icons/TreeSVG';

import Langs from '@/interfaces/Langs';

import langData from '@/data/lang.json';

const Caracteristics = ({ lang = 'es' }: Langs): JSX.Element => {
	const Icons = [
		{
			children: <TreeSVG className='w-16' />,
			title: langData.caracteristics.wooden[lang].title,
			subtitle: langData.caracteristics.wooden[lang].subtitle,
		},
		{
			children: <DolarSVG className='w-16' />,
			title: langData.caracteristics.price[lang].title,
			subtitle: langData.caracteristics.price[lang].subtitle,
		},
		{
			children: <RecycleSVG className='w-16' />,
			title: langData.caracteristics.species[lang].title,
			subtitle: langData.caracteristics.species[lang].subtitle,
		},
	];
	return (
		<section className='bg-white bg-no-repeat bg-center bg-cover'>
			<div className='px-4 py-12 mx-auto justify-around h-full max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
				<div className='flex flex-col w-full mb-12 text-center gap-16'>
					<div className='flex flex-wrap max-w-3xl w-full mx-auto [&>div]:flex-[0_0_100%] md:[&>div]:flex-[0_0_33%] gap-y-5 justify-center md:[&>div>img]:h-28 md:[&>div>img]:w-28 [&>div>img]:w-24 [&>div>img]:h-24'>
						{Icons.map((icon) => (
							<IconText
								key={icon.title}
								title={icon.title}
								text={icon.subtitle}
							>
								{icon.children}
							</IconText>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Caracteristics;

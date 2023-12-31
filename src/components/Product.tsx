import Image from 'next/image';

type Product = {
	name: string;
	description: string;
	image: string;
};
const Product = ({ name, description, image }: Product) => {
	return (
		<div className='flex flex-col bg-primary'>
			<Image
				src={image}
				alt={`${name} - ${description}`}
				className='h-56 object-cover w-full'
				width={300}
				height={225}
			/>
			<div className='flex flex-col p-5'>
				<h3 className='text-white font-bold text-2xl'>{name}</h3>
				<p className='text-white font-semibold'>{description}</p>
			</div>
		</div>
	);
};
export default Product;

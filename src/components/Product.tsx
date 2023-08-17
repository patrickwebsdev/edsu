type Product = {
	name: string;
	description: string;
	image: string;
};
const Product = ({ name, description, image }: Product) => {
	return (
		<div className='flex flex-col bg-primary'>
			<img
				src={image}
				alt={`${name} - ${description}`}
				className='h-56 object-cover'
			/>
			<div className='flex flex-col p-5'>
				<h3 className='text-white font-bold text-2xl'>{name}</h3>
				<p className='text-white font-semibold'>{description}</p>
			</div>
		</div>
	);
};
export default Product;

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'EDSU Lumber | 404',
};

const NotFound = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-white py-48'>
			<div className='flex flex-col'>
				<div className='flex flex-col items-center'>
					<div className='text-primary font-bold text-7xl text-center'>404</div>

					<div className='font-bold text-center text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10'>
						Esta página no existe
					</div>

					<div className='text-gray-400 text-center font-medium text-sm md:text-xl lg:text-2xl mt-8'>
						No se pudo encontrar la página que estás buscando.
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;

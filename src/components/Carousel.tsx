'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

type CarouselProps = {
	sliderImages?: string[];
};

const defaultImages = [
	'slider1.jpg',
	'slider2.jpg',
	'slider3.jpg',
	'slider4.jpg',
	'slider5.jpg',
	'slider6.jpg',
];

const Carousel = ({ sliderImages = defaultImages }: CarouselProps) => {
	return (
		<Swiper
			loop={true}
			spaceBetween={10}
			navigation={true}
			modules={[FreeMode, Navigation, Thumbs]}
			className='mySwiper2 lg:[&>.swiper-wrapper]:h-[365px] [&>.swiper-wrapper]:h-[50vh]'
		>
			{sliderImages.map((image) => (
				<SwiperSlide className='!flex justify-center' key={image}>
					<img
						src={`/slider/${image}`}
						alt={image}
						className='object-cover w-full'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Carousel;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

type CarouselProps = {
	sliderImages?: string[];
};

const defaultImages = [
	'slider1.webp',
	'slider2.webp',
	'slider3.webp',
	'slider4.webp',
	'slider5.webp',
	'slider6.webp',
];

const Carousel = ({ sliderImages = defaultImages }: CarouselProps) => {
	return (
		<Swiper
			loop={true}
			spaceBetween={10}
			centeredSlides={true}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true,
			}}
			pagination={{
				clickable: true,
			}}
			className='mySwiper2 lg:[&>.swiper-wrapper]:h-[365px] [&>.swiper-wrapper]:h-[50vh]'
		>
			{sliderImages.map((image) => (
				<SwiperSlide className='!flex justify-center' key={image}>
					<Image
						src={`/slider/${image}`}
						alt={image}
						width={800}
						height={800}
						className='object-cover w-full'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Carousel;

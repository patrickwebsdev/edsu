interface Props {
	image?: string;
	title: string;
	text?: string;
}

const ImageText = ({ title, text, image }: Props): JSX.Element => {
	return (
		<div className='flex justify-center items-center flex-col gap-1'>
			<img
				src={image}
				className='aspect-[1/1] object-cover rounded-full border-4 border-primary'
				alt={`${title} - ${text}`}
			/>
			<p className='text-lg xxs:text-xl font-bold text-primary'>{title}</p>
			{text ?? <p>{text}</p>}
		</div>
	);
};
export default ImageText;

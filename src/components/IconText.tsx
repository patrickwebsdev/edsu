interface Props {
	children?: JSX.Element;
	title: string;
	text?: string;
}

const IconText = ({ children, title, text }: Props): JSX.Element => {
	return (
		<div className='flex justify-center items-center flex-col gap-1'>
			<div className='rounded-full border-primary border-4 p-5 fill-primary stroke-primary'>
				{children}
			</div>
			<p className='text-xl font-bold text-primary'>{title}</p>
			{text ?? <p>{text}</p>}
		</div>
	);
};
export default IconText;
